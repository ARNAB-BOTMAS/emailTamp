from flask import Flask, request, jsonify
from send import send_mail

app = Flask(__name__)

# Replace 'your_api_key' with your actual API key
api_keys = {
    'your_api_key': 'your_secret_key'
}

def authenticate(api_key):
    return api_key in api_keys

@app.route('/')
def index():
    return 'Welcome to the API!'

@app.route('/email/<param>', methods=['GET'])
def check_parameter(param):
    # Check if 'api-key' is present in the request headers
    api_key = request.headers.get('Authorization')
    
    if api_key and authenticate(api_key):
        if param != "":
            status = send_mail(param)
            if status:
                result = {'status': 'True'}
                return jsonify(result), 200
            else:
                result = {'status': 'False'}
                return jsonify(result), 201
        else:
            result = {'status': 'False'}
            return jsonify(result), 300
        # The API key is valid, provide access to the resource
        # return jsonify({'message': 'Access granted! This is your resource.'})
    else:
        result = {'status': 'False'}
        return jsonify(result), 404
        
        # Invalid or missing API key
        # return jsonify({'message': 'Access denied! Invalid API key.'}), 401

    # if not api_key or not is_valid_api_key(api_key):
    #     return jsonify({'error': 'Invalid API key'}), 401

    # # Replace 'expected_value' with the value you are checking against
    # expected_value = 'arnadmondal203@gmail.com'

    # if param == expected_value:
    #     result = {'status': 'true'}
    # else:
    #     result = {'status': 'false'}


if __name__ == '__main__':
    app.run(debug=True)
