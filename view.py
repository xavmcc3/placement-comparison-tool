from compare import compare
import asyncio
import time
import os

import webview
import sys

def resource_path(relative_path):
    try:
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")

    return os.path.join(base_path, relative_path)

def local_path(relative_path):
    if getattr(sys, 'frozen', False):
        application_path = os.path.dirname(sys.executable)
    elif __file__:
        application_path = os.path.dirname(__file__)

    return os.path.join(application_path, relative_path)

class Api:
    @staticmethod
    def set_window(window: webview.Window):
        Api.window = window

    @staticmethod
    def win_log(msg):
        Api.window.evaluate_js(f'addToLog("{msg}")')

    @staticmethod
    def main(window):
        Api.place = Api.comp = "MISSING"
        Api.set_window(window)

    def init(self):
        response = {
            'message': 'Compare Placement Manuals'
        }
        return response
    
    def destroy(self):
        Api.window.destroy()

    def getPlacement(self):
        file_types = ('Excel files (*.xlsx)', 'All files (*.*)')
        path = window.create_file_dialog(webview.OPEN_DIALOG, allow_multiple=False, file_types=file_types)
        if path is None:
            raise Exception("Cancelled");

        Api.place = path[0]
        response = {
            'message': 'Compare Placement Manuals',
            'path': Api.place
        }
        return response
    
    def getComp(self):
        file_types = ('Excel files (*.xlsx)', 'All files (*.*)')
        path = window.create_file_dialog(webview.OPEN_DIALOG, allow_multiple=False, file_types=file_types)
        if path is None:
            raise Exception("Cancelled");

        Api.comp = path[0]
        response = {
            'message': 'Compare Placement Manuals',
            'path': Api.comp
        }
        return response
    
    def doCompare(self, params):
        time.sleep(0.1)

        if Api.place == 'MISSING':
            raise Exception("Placement Manual not found")
        if Api.comp == 'MISSING':
            raise Exception("Catalogue not found")
        if params['column'] == "":
            params['column'] = 'N'
        
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)

        try:
            compare(params, Api.place, Api.comp, Api.log)
        except Exception as e:
            Api.log(f"> [<span style='color: #ffff00;'>Warn</span>] {e}")
        
        Api.log("> [<span style='color: #ff00ff;'>Done</span>]")

        response = {
            'message': 'done'
        }
        return response
    
    def finish(self):
        os.startfile(Api.place)

        response = {
            'message': 'done'
        }
        return response
    
    def say(self, msg):
        print(msg)

    def log(msg):
        Api.window.evaluate_js(rf'addToLog("{msg}")')

# Build with the following command 
# python -m PyInstaller --onefile --name="Placement Manual Comparison" --icon=placement-manual-comparison.ico --clean --add-data="public/*;public/" --windowed --noconsole view.py

if __name__ == "__main__":
    html = resource_path('public\index.html')
    window = webview.create_window(
        'Placement Manual Comparison', html,
        width=530, height=600,
        fullscreen=False,
        resizable=False,
        js_api=Api()
    )

    try:
        webview.start(Api.main, window, http_server=True)
    except (Exception, KeyError, KeyboardInterrupt) as e:
        print("Window closed", e)
        sys.exit()