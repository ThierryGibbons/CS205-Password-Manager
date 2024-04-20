


const Pwned = (email: string) => {

    let result = "";

    fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${email}`, {
        headers: {
            'hibp-api-key': '5dec7a3c1d04424693816febd897cd2a'
        },
        method: 'GET',
        
    }).then(res => {
        if (res.ok){
            result = "Your email address has been the victim of a data breach"
        } else {
            result = "Your email is secure"
        }
    })

    return result;

};

export default Pwned;