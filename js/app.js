const data = {
  coverImage: "assets/img/cover.jpg",
  avatar: "assets/img/avatar.jpg",

  name: "GK Bronze Studio",
  handle: "@___gkbronze",
  bio: "✨ Bronze seguro, duradouro e de alto padrão. Realce sua beleza com naturalidade e técnica profissional.",

  links: [
    {
      title: "📅 Agendar Bronze",
      subtitle: "Escolha seu horário e garanta seu atendimento VIP",
      href: "https://wa.me/5511963672401",
      icon: "🌞"
    },
    
    {
      title: "✨ Instagram",
      subtitle: "Transformações reais de clientes satisfeitas",
      href: "https://instagram.com/___gkbronze",
      icon: "✨"
    },
    {
      title: "📍 Localização do Estúdio",
      subtitle: "Veja como chegar facilmente até nós",
      href: "https://maps.app.goo.gl/pdTf4KSahLYhkDxdA?g_st=ipc",
      icon: "📍"
    }
  ],

  socials: [
    { icon: "assets/icons/instagram.svg", href: "https://instagram.com/___gkbronze" },
    { icon: "assets/icons/whatsapp.svg", href: "https://wa.me/5511963672401" }
  ]
};


// COVER
document.getElementById("cover").style.backgroundImage =
  `url('${data.coverImage}')`;

// HEADER
document.getElementById("avatar").src = data.avatar;
document.getElementById("name").textContent = data.name;
document.getElementById("handle").textContent = data.handle;
document.getElementById("bio").textContent = data.bio;

// LINKS
const linksEl = document.getElementById("links");
data.links.forEach(link => {
  const a = document.createElement("a");
  a.className = "link";
  a.href = link.href;
  a.target = "_blank";
  a.innerHTML = `
    <div class="icon">${link.icon}</div>
    <div class="text">
      <div class="title">${link.title}</div>
      <div class="subtitle">${link.subtitle}</div>
    </div>
  `;
  linksEl.appendChild(a);
});

// SOCIALS
const socialsEl = document.getElementById("socials");
data.socials.forEach(s => {
  const a = document.createElement("a");
  a.className = "sbtn";
  a.href = s.href;
  a.target = "_blank";
  a.innerHTML = `<img src="${s.icon}" alt="social icon">`;
  socialsEl.appendChild(a);
});
