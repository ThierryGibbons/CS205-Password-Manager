


const Pwned = (email: string) => {

    fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${email}`, {
        headers: {
            'hibp-api-key': '5dec7a3c1d04424693816febd897cd2a'
        },
        method: 'GET',
        
    }).then(res => {
        if (res.ok){
            console.log('BREACH DETECTED')
        } else {
            console.log('A-Okay')
        }
    })

};

export default Pwned;