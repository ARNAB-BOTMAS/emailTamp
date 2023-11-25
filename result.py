import requests

def email(email):
    api_key = 'your_api_key'

    # Set the API endpoint URL
    url = f'http://127.0.0.1:5000/email/{email}'

    # Set the Authorization header with the API key
    headers = {'Authorization': api_key}

    # Make the GET request
    response = requests.get(url, headers=headers)

    # Check the response status code
    if response.status_code == 200:
        # Request was successful, print the response content
        # print(response.json().get('status'))
        return response.json().get('status')
    elif response.status_code == 300:
        return response.json().get('status')
        # print(response.json().get('status'))
    else:
        return response.json().get('status')
        # print(response.status_code)
        # Request failed, print the error message
        # print(response.json().get('status'))
# name = ""
# email(input("Enter the sender email id: "))