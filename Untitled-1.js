
        body: JSON.stringify({
            addedTokens: 500,
            addedXp: 300,
            name: await getName(myToken)
        })
    

    if (response.status == 200) {
        alert(`500} tokens and 300 XP added to your account!`);
    
    };



addCurrencies();