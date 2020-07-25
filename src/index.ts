import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  IDisposable
} from '@lumino/disposable';

import {
  ReadonlyJSONObject
} from "@lumino/coreutils";

import {
  ToolbarButton
} from '@jupyterlab/apputils';

import {
  DocumentRegistry
} from '@jupyterlab/docregistry';

import {
  NotebookPanel, INotebookModel, INotebookTracker,
} from '@jupyterlab/notebook';

class SaveNotebookToGalaxyButtonExtension implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel> {

  constructor(app: JupyterFrontEnd) {
      this.app = app;
    }

  readonly app: JupyterFrontEnd;

  createNew(panel: NotebookPanel, context: DocumentRegistry.IContext<INotebookModel>): IDisposable {
    // Create the on-click callback for the toolbar button.
    let saveToGalaxy = () => {
      console.log('Save Notebook to Galaxy-here.');
      this.app.commands.execute("notebook:save-to-galaxy");
    };

    // Create the toolbar button
    let button = new ToolbarButton({
      className: 'SaveNotebookToGalaxyButton',
      onClick: saveToGalaxy,
      tooltip: 'Save Notebook to Galaxy---'
    });

    // Add the toolbar button to the notebook
    panel.toolbar.insertItem(6, 'saveToGalaxy', button);

    // The ToolbarButton class implements `IDisposable`, so the
    // button *is* the extension for the purposes of this method.
    return button;
  }
}
/**
 * Initialization data for the jupyterlab_galaxy extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_galaxy',
  autoStart: true,
  requires: [INotebookTracker],
  activate: (app: JupyterFrontEnd, notebooks: INotebookTracker) => {

    function getCurrent(args: ReadonlyJSONObject): NotebookPanel | null {
      const widget = notebooks.currentWidget;
      const activate = args["activate"] !== false;

      if (activate && widget) {
        app.shell.activateById(widget.id);
      }

      return widget;
    }

    function isEnabled(): boolean {
      return (
        notebooks.currentWidget !== null &&
        notebooks.currentWidget === app.shell.currentWidget
      );
    }

    app.commands.addCommand(CommandIDs.saveToGalaxy, {
      label: "Save Notebook to Galaxy",
      execute: async args => {
        const current = getCurrent(args);
        if (!current) {
          return;
        }
        await current.context.save();
        const notebookPath = current.context.path;
        console.log('we save', notebookPath)

      },
      isEnabled
    });

    let buttonExtension = new SaveNotebookToGalaxyButtonExtension(app);
    app.docRegistry.addWidgetExtension('Notebook', buttonExtension);
    console.log('JupyterLab extension jupyterlab_galaxy is activated!');

  }
};

export default extension;
export namespace CommandIDs{
  export const saveToGalaxy = 'notebook:save-to-galaxy'
}
