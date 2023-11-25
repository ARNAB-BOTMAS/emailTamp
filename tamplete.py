from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage


def createMailTemplate():
    message = MIMEMultipart()

    mail_content = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Arnab Mondal</title>
    <style>
        *{{
            padding: 0;
            margin: 0;
        }}
        body{{
            -webkit-text-size-adjust: 100%;
            padding: 0;
            margin: 0;
        }}
        hr{{
            border: 2px solid #fff;
        }}
        .fornt{{
            align-items: center;
            display: flex;
            background: url("https://i.pinimg.com/originals/cd/83/e3/cd83e34992570d14493c163c3ff3d42d.gif");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-radius: 10px;

        }}
        .image{{
            display: block;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left: 10px;
            margin-right: 20px;

        }}
        .avatar {{
            vertical-align: middle;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            box-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
        }}
        .subHeadding{{
            color: aliceblue;
        }}
        .text{{
            padding-bottom: 10px;
        }}
    </style>
</head>
<body>
    <header class="fornt">
        <div class="image">
            <img src="https://raw.githubusercontent.com/ARNAB-BOTMAS/test_data_sri/main/mailImage.jpg" alt="Avatar" class="avatar">
        </div>
        <div class="text">
            <h1><span style="color:#feba5b;">Arnab Mondal</span></h1><hr><br>
            <p class="subHeadding"><i>I am a full stack developer from Kolkata, India.</i></p><br>
            <a href="https://www.facebook.com/shagor.roy.370?mibextid=JRoKGi"><img style="margin-right: 5px; width: 24px; height: 24px;" class="fa" src="https://ci3.googleusercontent.com/mail-sig/AIorK4y254oo7SnK9yJ9OWk5uTm_jyKv8bgTYemU_AlQSKnxuuWrYEghkH3mT1P4FXvplQn4LDy4mA0"></a>
            <a href="https://github.com/ARNAB-BOTMAS"><img style="margin-right: 5px; width: 24px; height: 24px;" class="fa" src="https://ci3.googleusercontent.com/mail-sig/AIorK4yePp-3534zrCkkLbUrpNsRq3jQkOpI8dbBdn7VspEDSqnJlJu0moG_wVYn2Oj2wlCGZqkT__k"></a>
            <a href="https://wa.me/919339421756"><img style="margin-right: 5px; width:24px; height: 24px;" class="fa" src="https://ci3.googleusercontent.com/mail-sig/AIorK4x0A_2xbKsa5ftMQGvaHKI-H3q6WFQLDwXJeYqstukMPSHR8tU8k7Q1wIT5HLKrkq9DwStLqVA"></a>
            <a href="mailto:arnabmondal203@gmail.com"><img style="margin-right: 5px; width: 24px; height: 24px" class="fa" src="https://ci3.googleusercontent.com/mail-sig/AIorK4wUYwnIMwGeHGEF2TLFrWh24jatywS7lZQgKbhQgW6_myFKUakiFFoovFW2jNE5zxX3rOGwhX8"></a>
        </div>
    </header>
</body>
</html>

    """


    message.attach(MIMEText(mail_content, 'html'))

    return message
