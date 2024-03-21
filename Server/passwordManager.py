import json

def load_data(filename):
    with open(filename, 'r') as file:
        data = json.load(file)
    return data

def save_data(filename, data):
    with open(filename, 'w') as file:
        json.dump(data, file, indent=4)

def add_password(filename, new_entry):
    data = load_data(filename)
    data['passwords'].append(new_entry)
    save_data(filename, data)

def delete_password(filename, site_name):
    data = load_data(filename)
    data['passwords'] = [entry for entry in data['passwords'] if entry['site'] != site_name]
    save_data(filename, data)
