const profilesList = [
    {
        fotoSrs: './images/profile_foto.jpg',
        fotoColor1: '--blue-azure',
        fotoColor2: '--light-blue',
        name: 'Andrew smith',
        nickName: '@andrewsmith',
        instagram: 'www.instagram.com/andrewsmith',
        telegram: 'www.facebook.com/andrewsmith',
        facebook: 'www.telegram.org/andrewsmith',
        post: 120,
        followers: 12000,
        following: 345,
        description: "The best things come from living outside of your comfort zone🔥. Here's my story for the history books✨"
    },
    {
        fotoSrs: './images/profile_foto2.jpg',
        fotoColor1: '--red',
        fotoColor2: '--yellow',
        name: 'Veronica Reyes',
        nickName: '@veronicareyes',
        instagram: 'www.instagram.com/veronicareyes',
        telegram: 'www.facebook.com/veronicareyes',
        facebook: 'www.telegram.org/veronicareyes',
        post: 34,
        followers: 950,
        following: 40,
        description: "Overcoming boundaries is the key to success🚀! New horizons await beyond the familiar🌠"
    },
    {
        fotoSrs: './images/profile_foto3.jpg',
        fotoColor1: '--green',
        fotoColor2: '--purple',
        name: 'Linda Myers',
        nickName: '@lindamyers',
        instagram: 'www.instagram.com/lindamyers',
        telegram: 'www.facebook.com/lindamyers',
        facebook: 'www.telegram.org/lindamyers',
        post: 1300,
        followers: 53700,
        following: 255,
        description: "Great things begin where comfort ends💫. Change the world by starting with yourself🌍! "
    }
]

// nodes

const root = document.querySelector(':root')
const profileCard = document.getElementById('profileCard')

const profileFoto = document.getElementById('profileFoto')

const profileName = document.getElementById('profileName')
const profileNickname = document.getElementById('profileNickname')
const profileDescription = document.getElementById('profileDescription')

const profileInstagram = document.getElementById('profileInstagram')
const profileTelegram = document.getElementById('profileTelegram')
const profileFacebook = document.getElementById('profileFacebook')

const profilePost = document.getElementById('profilePost')
const profileFollowers = document.getElementById('profileFollowers')
const profileFollowing = document.getElementById('profileFollowing')

const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')

// state

let currentProfile = 0

// functions

const redactNumber = (n) => n < 1000 ? `${n}` : `${Math.round(n / 1000)}K`

const redactLinkText = (link) => `${link.slice(0, 23)}...`

const changeProfile = (profilesList, profileNumber) => {
    profile = profilesList[profileNumber]

    profileCard.classList.remove('animation')
    setTimeout(() => profileCard.classList.add('animation'), 100)

    profileFoto.src = profile.fotoSrs
    root.style.setProperty('--profile-card-foto-color1', `var(${profile.fotoColor1})`);
    root.style.setProperty('--profile-card-foto-color2', `var(${profile.fotoColor2})`);

    profileName.innerHTML = profile.name
    profileNickname.textContent = profile.nickName
    profileDescription.textContent = profile.description

    profileInstagram.textContent = redactLinkText(profile.instagram)

    profileInstagram.href = profile.instagram
    profileTelegram.href = profile.telegram
    profileFacebook.href = profile.facebook

    profilePost.textContent = redactNumber(profile.post)
    profileFollowers.textContent = redactNumber(profile.followers)
    profileFollowing.textContent = redactNumber(profile.following)
}

const selectPrevProfile = (profilesList) => {
    if (currentProfile > 0) {
        changeProfile(profilesList, currentProfile - 1)
        currentProfile = currentProfile - 1
    } else {
        changeProfile(profilesList, profilesList.length - 1)
        currentProfile = profilesList.length - 1
    }
}

const selectNextProfile = (profilesList) => {
    if (currentProfile < profilesList.length - 1) {
        changeProfile(profilesList, currentProfile + 1)
        currentProfile = currentProfile + 1
    } else {
        changeProfile(profilesList, 0)
        currentProfile = 0
    }
}

// events

prevButton.addEventListener('click', () => selectPrevProfile(profilesList))
nextButton.addEventListener('click', () => selectNextProfile(profilesList))



changeProfile(profilesList, 0)