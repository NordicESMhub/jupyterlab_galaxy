"""JupyterLab Galaxy: Communicate with Galaxy from JupyterLab"""

# need this in order to show version in `jupyter serverextension list`
from ._version import __version__


from notebook.utils import url_path_join
from jupyterlab_galaxy.handlers import SaveToGalaxy


# Jupyter Extension points
def _jupyter_server_extension_paths():
  return [{'module': 'jupyterlab_galaxy'}]


def load_jupyter_server_extension(nbapp):
  """
  Called when the extension is loaded.

  Args:
       nbapp (NotebookWebApplication): handle to the Notebook webserver instance.
  """

  print('jupyterlab_galaxy server extension loaded')

  # Add download handler.
  base_url = web_app.settings['base_url']

  base_url = url_path_join(nbapp.web_app.settings['base_url'], r'/put/')
  handlers = [(base_url, SaveToGalaxy)]
  nbapp.web_app.add_handlers('.*', handlers)

  nbapp.log.info("jupyterlab_galaxy is enabled.")
