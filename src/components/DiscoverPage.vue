<template>
  <div>
    <!-- Hero Section -->
    <section class="py-5 bg-gradient-primary text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1 class="display-4 fw-bold mb-4">Découvrez l'expérience Shoplink</h1>
            <p class="lead mb-4">Transformez vos courses en grande surface avec une application intuitive, rapide et connectée.</p>
            <router-link to="/order" class="btn btn-light btn-lg me-3">Essayer maintenant</router-link>
            <a href="#features" class="btn btn-outline-light btn-lg">En savoir plus</a>
          </div>
          <div class="col-md-6 text-center">
            <img :src="require('@/assets/mockup4.png')" alt="Shoplink App" class="img-fluid" style="max-height: 400px;" />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-5">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Pourquoi choisir Shoplink ?</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="text-center">
              <i class="fas fa-bolt fa-3x text-primary mb-3"></i>
              <h4>Rapidité</h4>
              <p>Scannez et payez en quelques secondes. Plus d'attente aux caisses !</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="text-center">
              <i class="fas fa-mobile-alt fa-3x text-primary mb-3"></i>
              <h4>Simplicité</h4>
              <p>Interface intuitive inspirée d'iOS 17+. Accessible à tous les âges.</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="text-center">
              <i class="fas fa-shield-alt fa-3x text-primary mb-3"></i>
              <h4>Sécurité</h4>
              <p>Paiements sécurisés et données protégées. Votre sécurité est notre priorité.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Comment ça marche ?</h2>
        <div class="row">
          <div class="col-md-3 text-center mb-4">
            <div class="step-circle mx-auto mb-3">1</div>
            <h5>Téléchargez</h5>
            <p>Installez l'app sur votre smartphone</p>
          </div>
          <div class="col-md-3 text-center mb-4">
            <div class="step-circle mx-auto mb-3">2</div>
            <h5>Connectez-vous</h5>
            <p>Avec votre compte Google en un clic</p>
          </div>
          <div class="col-md-3 text-center mb-4">
            <div class="step-circle mx-auto mb-3">3</div>
            <h5>Scannez</h5>
            <p>Les produits avec votre caméra</p>
          </div>
          <div class="col-md-3 text-center mb-4">
            <div class="step-circle mx-auto mb-3">4</div>
            <h5>Payez</h5>
            <p>En ligne ou en magasin selon votre choix</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Ils adorent Shoplink</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="testimonial in testimonials" :key="testimonial.name">
            <div class="card h-100 shadow-sm">
              <div class="card-body text-center">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="rounded-circle mb-3" width="80" />
                <p class="card-text">"{{ testimonial.quote }}"</p>
                <h6 class="card-title mb-1">{{ testimonial.name }}</h6>
                <small class="text-muted">{{ testimonial.company }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-primary text-white">
      <div class="container text-center">
        <h2 class="fw-bold mb-4">Prêt à révolutionner vos courses ?</h2>
        <p class="lead mb-4">Rejoignez des milliers d'utilisateurs satisfaits</p>
        <router-link to="/order" class="btn btn-light btn-lg me-3">Commander maintenant</router-link>
        <a href="#contact" class="btn btn-outline-light btn-lg">Nous contacter</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DiscoverPage',
  data() {
    return {
      testimonials: [
        {
          name: "Marie L.",
          company: "Maman de 3 enfants",
          quote: "Shoplink m'a fait gagner tellement de temps ! Plus besoin de faire la queue avec les enfants.",
          avatar: 'https://i.pravatar.cc/100?img=1'
        },
        {
          name: "Pierre D.",
          company: "Chef d'entreprise",
          quote: "L'interface est parfaite. Mes courses sont devenues un plaisir plutôt qu'une corvée.",
          avatar: 'https://i.pravatar.cc/100?img=2'
        },
        {
          name: "Sophie M.",
          company: "Étudiante",
          quote: "Simple, rapide et efficace. Exactement ce dont j'avais besoin pour mes courses !",
          avatar: 'https://i.pravatar.cc/100?img=3'
        }
      ]
    }
  }
}
</script>

<style scoped>
.bg-gradient-primary {
  background: linear-gradient(135deg, #0d6efd, #0b5ed7);
}

.step-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #0d6efd;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>