// Placeholder JS bundle for Rock & Pillar Cabin site
// The real site is a React build; this is a simplified version to allow deployment.
document.getElementById('root').innerHTML = `
  <main style="font-family: sans-serif; padding: 2rem; max-width: 600px; margin: auto; text-align: center;">
    <h1>Rock & Pillar Cabin — Middlemarch</h1>
    <p>Welcome to our rustic Airbnb cabin website.</p>
    <p><a href="https://airbnb.co.nz/h/rockandpillarcabin" target="_blank">Book on Airbnb</a></p>
  </main>
`;
.gallery {
  text-align: center;
  padding: 2rem 1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  margin-top: 1rem;
}

.gallery-grid img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
