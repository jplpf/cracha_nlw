const linksSocialMedia = {
  github: 'jplpf',
  youtube: 'maykbrito',
  facebook: 'maykbrito',
  instagram: 'maykbrito',
  twitter: 'juaum_paullu'
}

//DOM Document Object Model
function changeSocialMediaLinks() {
  // document.getElementById('userName').textContent = 'Olivia'
  //for (let i = 0 i; <=10; i++){
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    //alert(li.getAttribute('class'))
    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}
changeSocialMediaLinks()

// userName.textContent = 'Marcelo'

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  //alert(url)

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
