function buyCake(interaction, client) {
    const price = 5;

    client.Users.findOne({
        user_id: interaction.user.id,
    }, (err, data) => {
        if (err) console.error(err);
        if (!data) {
            const newData = new client.Users({
                user_id: interaction.user.id,
                balance: 0,
                xp: 0,
                level: 0,
                xp_cooldown: 900000000,
                hugs: 0,
                punches: 0,
                cries: 0,
            });
            newData.save().catch(err => console.error(err));
            
            interaction.editReply({ content: 'You don\'t have enough money to buy that!', components: [] });
        } else if (data) {
            if (price > data.balance) {
                interaction.editReply({ content: 'You don\'t have enough money to buy that!', components: [] });
            } else {
                client.UserItems.findOne({
                    user_id: interaction.user.id,
                }, (err, data) => {
                    if (err) client.error(err);
                    if (!data) {
                        const newData = new client.UserItems({
                            user_id: interaction.user.id,
                            coffee: 0,
                            tea: 0,
                            cake: 1,
                        });
                        newData.save().catch(err => console.error(err));
                        interaction.editReply({ content: 'successfully bought 1 cake!', components: [] });
                    } else if (data) {
                        data.cake += 1;
                        data.save().catch(err => console.error(err));
                        interaction.editReply({ content: 'successfully bought 1 cake!', components: [] });
                    }
                });
            }
        }
    });
};

function buyTea(interaction, client) {
    const price = 1;

    client.Users.findOne({
        user_id: interaction.user.id,
    }, (err, data) => {
        if (err) console.error(err);
        if (!data) {
            const newData = new client.Users({
                user_id: interaction.user.id,
                balance: 0,
                xp: 0,
                level: 0,
                xp_cooldown: 900000000,
                hugs: 0,
                punches: 0,
                cries: 0,
            });
            newData.save().catch(err => console.error(err));
            
            interaction.editReply({ content: 'You don\'t have enough money to buy that!', components: [] });
        } else if (data) {
            if (price > data.balance) {
                interaction.editReply({ content: 'You don\'t have enough money to buy that!', components: [] });
            } else {
                client.UserItems.findOne({
                    user_id: interaction.user.id,
                }, (err, data) => {
                    if (err) client.error(err);
                    if (!data) {
                        const newData = new client.UserItems({
                            user_id: interaction.user.id,
                            coffee: 0,
                            tea: 1,
                            cake: 0,
                        });
                        newData.save().catch(err => console.error(err));
                        interaction.editReply({ content: 'successfully bought 1 tea!', components: [] });
                    } else if (data) {
                        data.tea += 1;
                        data.save().catch(err => console.error(err));
                        interaction.editReply({ content: 'successfully bought 1 tea!', components: [] });
                    }
                });
            }
        }
    });
};

function buyCoffee(interaction, client) {
    const price = 2;

    client.Users.findOne({
        user_id: interaction.user.id,
    }, (err, data) => {
        if (err) console.error(err);
        if (!data) {
            const newData = new client.Users({
                user_id: interaction.user.id,
                balance: 0,
                xp: 0,
                level: 0,
                xp_cooldown: 900000000,
                hugs: 0,
                punches: 0,
                cries: 0,
            });
            newData.save().catch(err => console.error(err));
            
            interaction.editReply({ content: 'You don\'t have enough money to buy that!', components: [] });
        } else if (data) {
            if (price > data.balance) {
                interaction.editReply({ content: 'You don\'t have enough money to buy that!', components: [] });
            } else {
                client.UserItems.findOne({
                    user_id: interaction.user.id,
                }, (err, data) => {
                    if (err) client.error(err);
                    if (!data) {
                        const newData = new client.UserItems({
                            user_id: interaction.user.id,
                            coffee: 1,
                            tea: 0,
                            cake: 0,
                        });
                        newData.save().catch(err => console.error(err));
                        interaction.editReply({ content: 'successfully bought 1 coffee!', components: [] });
                    } else if (data) {
                        data.coffee += 1;
                        data.save().catch(err => console.error(err));
                        interaction.editReply({ content: 'successfully bought 1 coffee!', components: [] });
                    }
                });
            }
        }
    });
};

module.exports = { buyCake, buyTea, buyCoffee };