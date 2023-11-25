# main.py
import eel
from result import email

eel.init('web')


@eel.expose
def print_email(name, received_email, phone, password):
    res = email(received_email)
    if res:
        print("Email sent successfully")
        return True
    print(f"Received email: {received_email}")


eel.start('signup.html', size=(800, 600))
