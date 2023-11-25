from email.message import EmailMessage
import ssl
import smtplib
from tamplete import createMailTemplate
import uuid

def generate_employee_id(prefix="ARG"):
    # Generate a random UUID (Universally Unique Identifier) and remove dashes
    employee_id = prefix + str(uuid.uuid4().hex[:6])
    return employee_id

def send_mail(mail):
    empId = generate_employee_id()
    email_sender = "arnabmondal203@gmail.com"
    email_password = "gubrnyziiskzxmxn"
    email_receiver = mail

    em = EmailMessage()
    em['From'] = email_sender
    em['To'] = email_receiver
    em['Subject'] = "Access Your New Template"
    em.set_content(createMailTemplate())

    context = ssl.create_default_context()
        
    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email_sender, email_password)
            smtp.sendmail(email_sender, email_receiver, em.as_string())
        return True  # Email sent successfully
    except Exception as e:
        print(f"An error occurred: {e}")
        return False

# send_mail(input("Enter the mail id: "))