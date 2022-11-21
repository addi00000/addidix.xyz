lanyard({
    userId: "1037686160622878771",
}).then((response) => {
    document.getElementsByClassName("lanyard-profile-picture")[0].src = `https://cdn.discordapp.com/avatars/${response.discord_user.id}/${response.discord_user.avatar}.png`;
    document.getElementsByClassName("lanyard-username")[0].innerHTML = `${response.discord_user.username}#${response.discord_user.discriminator}`;
    document.getElementsByClassName("lanyard-activity")[0].innerHTML = `Playing ${response.activities[0].name} - ${response.activities[0].details}`;
});