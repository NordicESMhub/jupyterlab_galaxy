from setuptools import setup, find_packages
from jupyterlab_galaxy import __version__


long_description = 'A Jupyter Notebook server extension that implements \
                    common Galaxy commands, which are executed in the server\'s shell; \
                    to be used in conjuction with the jupyterlab_galaxy JupyterLab extension.'

# Allows automatic enabling of the server extension; see the docs:
# https://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Distributing%20Jupyter%20Extensions%20as%20Python%20Packages.html
data_files = [
    ("etc/jupyter/jupyter_notebook_config.d", [
        "jupyter-config/jupyter_notebook_config.d/jupyterlab_galaxy.json"
    ])
]       

setup(
    name='jupyterlab_galaxy',
    version=__version__,
    description='A Jupyter Notebook server extension that implements galaxy commands to save Jupyter notebooks to Galaxy.',
    long_description=long_description,
    long_description_content_type="text/markdown",
    packages=find_packages(),
    include_package_data=True,
    data_files = data_files,
    author='UiO, Anne Fouilloux',
    license='BSD 3-Clause',
    url='https://github.com/NordicESMHub/jupyterlab_galaxy',
    keywords=['Jupyter', 'Jupyterlab', 'Galaxy', 'UiO'],
    python_requires='>=3.6',
    install_requires=['notebook']
)
