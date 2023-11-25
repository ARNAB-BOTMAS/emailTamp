import eel

eel.init('web')  # Folder containing your HTML file

@eel.expose
def animationComplete():
    print("Animation complete. Stopping animation and opening the page.")
    eel.stopAnimation()

@eel.expose
def openPage():
    print("Opening the page.")

if __name__ == '__main__':
    eel.start('index.html', size=(600, 400))
