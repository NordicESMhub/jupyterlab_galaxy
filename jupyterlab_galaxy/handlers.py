from galaxy_ie_helpers import put

def SaveToGalaxy(filepath):
    history_id = None
    filetype = auto
    put( filepath, file_type=filetype, history_id=history_id )
