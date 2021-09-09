function shopInit(client){
    client.Shop.findOne ({
        name: 'cake',
    }, (err, data) => {
        if (err) console.error(err);
        if (!data) {
            const newData = new client.Shop({
                name: 'cake',
                cost: 5,
                usable: 1,
            });
            newData.save().catch(err => console.error(err));
        } else if (data) {
            return;
        }
    });

    client.Shop.findOne ({
        name: 'tea',
    }, (err, data) => {
        if (err) console.error(err);
        if (!data) {
            const newData = new client.Shop({
                name: 'tea',
                cost: 1,
                usable: 1,
            });
            newData.save().catch(err => console.error(err));
        } else if (data) {
            return;
        }
    });

    client.Shop.findOne ({
        name: 'coffee',
    }, (err, data) => {
        if (err) console.error(err);
        if (!data) {
            const newData = new client.Shop({
                name: 'coffee',
                cost: 2,
                usable: 1,
            });
            newData.save().catch(err => console.error(err));
        } else if (data) {
            return;
        }
    });
}

module.exports = { shopInit };