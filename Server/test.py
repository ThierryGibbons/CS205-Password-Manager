# Localised version of the password manager, for testing purposes
import passwordManager

filename = 'temp.json'

def main():
    while True:
        print("\nPassword Manager")
        print("1. Add a new password")
        print("2. Delete a password")
        print("3. View all passwords")
        print("4. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            new_entry = {
                "site": input("Enter site name: "),
                "url": input("Enter site URL: "),
                "user": input("Enter username: "),
                "password": input("Enter password: "),
                "notes": input("Any notes? (Optional): ") or "None"
            }
            passwordManager.add_password(filename, new_entry)
            print("Password added successfully!")

        elif choice == "2":
            site_name = input("Enter the site name of the password to delete: ")
            passwordManager.delete_password(filename, site_name)
            print("Password deleted successfully, if it existed.")

        elif choice == "3":
            data = passwordManager.load_data(filename)
            for entry in data['passwords']:
                print(f"\nSite: {entry['site']}")
                print(f"URL: {entry['url']}")
                print(f"User: {entry['user']}")
                print(f"Password: {entry['password']}")
                print(f"Notes: {entry['notes']}")

        elif choice == "4":
            print("Exiting...")
            break

        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
