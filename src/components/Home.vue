<template>
  <div>
    <!-- Navbar -->
    <nav :class="['navbar', 'navbar-expand-lg', isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light', 'sticky-top', 'shadow-sm']">
      <div class="container">
        <a class="navbar-brand fw-bold text-primary" href="#">Shoplink</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#hero">{{ $t('nav_home') }}</a></li>
              <li class="nav-item"><a class="nav-link" href="#features">{{ $t('nav_features') }}</a></li>
              <li class="nav-item"><a class="nav-link" href="#design">{{ $t('nav_design') }}</a></li>
              <li class="nav-item"><a class="nav-link" href="#benefits">{{ $t('nav_benefits') }}</a></li>
              <li class="nav-item"><a class="nav-link" href="#contact">{{ $t('nav_contact') }}</a></li>
          </ul>
          <!-- Dark mode toggle -->
              <button @click="isDarkMode = !isDarkMode" class="btn btn-sm btn-outline-secondary ms-3">
               {{ isDarkMode ? $t('light_mode') : $t('dark_mode') }}
        </button>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <section id="hero" class="py-5 bg-light section-animate">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12 text-start mb-4 mb-md-0 hero-text">
            <h1 class="display-4 fw-bold">{{ $t('hero_title') }}</h1>
              <p class="lead text-muted">{{ $t('hero_description') }}</p>
                <a href="#features" class="btn btn-primary btn-lg mt-3">{{ $t('button_discover') }}</a>
          </div>
          <div class="col-md-6 col-12 text-center">
            <img :src="require('@/assets/mockup4.png')" alt="Mockup Shoplink"
                 class="img-fluid mockup-effect mockup-gradient" />
          </div>
        </div>
      </div>
    </section>

   <!-- Fonctionnalités -->
<section id="features" class="py-5 section-animate">
  <div class="container text-center">
    <h2 class="mb-4">{{ $t('features_title') }}</h2>
    <div class="row">
      
      <!-- Connexion Google -->
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <i class="fab fa-google fa-3x text-primary mb-3"></i>
            <h5 class="card-title">{{ $t('features_google_title') }}</h5>
            <p class="card-text">{{ $t('features_google_desc') }}</p>
          </div>
        </div>
      </div>

      <!-- Panier Intelligent -->
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <i class="fas fa-shopping-cart fa-3x text-success mb-3"></i>
            <h5 class="card-title">{{ $t('features_cart_title') }}</h5>
            <p class="card-text">{{ $t('features_cart_desc') }}</p>
          </div>
        </div>
      </div>

      <!-- Paiement Hybride -->
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <i class="fas fa-credit-card fa-3x text-danger mb-3"></i>
            <h5 class="card-title">{{ $t('features_payment_title') }}</h5>
            <p class="card-text">{{ $t('features_payment_desc') }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


    <!-- Design -->
    <section id="design" class="py-5 bg-light section-animate">
      <div class="container">
        <div class="card shadow-sm border-0">
          <div class="card-body text-center">
            <h2 class="mb-4">{{ $t('design_title') }}</h2>
          <p class="lead">{{ $t('design_description') }}</p>
            <img :src="require('@/assets/MOCKUP0.png')" alt="Mockup Shoplink"
                 class="img-fluid mockup-effect mockup-gradient" />
          </div>
        </div>
      </div>
    </section>

    <!-- Avantages -->
    <section id="benefits" class="py-5 section-animate">
      <div class="container">
        <div class="card shadow-sm border-0">
          <div class="card-body text-center">
            <h2 class="mb-4">{{ $t('benefits_title') }}</h2>
            <div class="row">
              <div class="col-md-6 mb-3">
                <i class="fas fa-users fa-2x text-primary mb-2"></i>
                <h5>{{ $t('benefits_customer_title') }}</h5>
                <p>{{ $t('benefits_customer_desc') }}</p>
              </div>
              <div class="col-md-6 mb-3">
                <i class="fas fa-plug fa-2x text-secondary mb-2"></i>
                <h5>{{ $t('benefits_api_title') }}</h5>
                <p>{{ $t('benefits_api_desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
<section id="contact" class="py-5 bg-light section-animate">
  <div class="container">
    <div class="card shadow-sm border-0">
      <div class="card-body text-center">
        <h2 class="mb-4">{{ $t('contact_title') }}</h2>
        <p class="lead">{{ $t('contact_description') }}</p>
        <button @click="showModal = true" class="btn btn-outline-primary btn-lg mt-3">
          <i class="fas fa-envelope me-2"></i>{{ $t('contact_button') }}
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Téléchargement Application - version isolée -->
<section id="download" class="py-5 section-animate download-section">
  <div class="container text-center">
    <h2 class="mb-4">{{ $t('download_title') }}</h2>
    <p class="lead mb-4">{{ $t('download_description') }}</p>
    
    <div class="qr-wrapper mx-auto mb-3">
      <img :src="`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${downloadLink}`" alt="QR Shoplink" />
    </div>

    <p class="mb-3">{{ $t('download_qr_hint') }}</p>
    <a :href="downloadLink" target="_blank" class="btn btn-light btn-lg">
      {{ $t('download_button') }}
    </a>
    <p class="mt-3 text-muted" style="font-size: 0.9em;">{{ $t('download_note') }}</p>
  </div>
</section>


    <!-- Footer -->
    <footer class="py-3 bg-black text-white text-center border-top">
      <small>&copy; 2025 Shoplink. {{ $t('footer_rights') }}</small>
    </footer>
  </div>
  <ContactModal v-if="showModal" @close="showModal = false" />
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue';
import ContactModal from './ContactModal.vue';
export default {

  name: 'App',

  data() {
    return {
      isDarkMode: false,
        showModal: false, // POUR DECLANCHER UN BUTTON
      testimonials:[
      {
        name: "Sophie L.",
        company: "Auchan Manager",
        quote: "Shoplink a simplifié notre parcours client dès la première semaine.",
        avatar: 'https://i.pravatar.cc/100?img=3'
      },
      {
        name: "Thomas G.",
        company: "Carrefour UX Lead",
        quote: "L’interface est fluide et intuitive — nos clients l’ont adorée.",
        avatar: 'https://i.pravatar.cc/100?img=3'
      },
      {
        name: "Inès M.",
        company: "Leclerc IT",
        quote: "L’intégration API a été rapide et efficace. Top outil !",
        avatar: 'https://i.pravatar.cc/100?img=3'

      }
    ]

    }
  },
  watch: {
    isDarkMode(val) {
      document.body.classList.toggle('dark-mode', val);
    }
  },
  components: {
  LanguageSwitcher,
  ContactModal

}

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  transition: background 0.3s ease, color 0.3s ease;
}

/* Dark mode */
body.dark-mode {
  background-color: #121212;
  color: #f1f1f1;
}
body.dark-mode .navbar,
body.dark-mode .card,
body.dark-mode .bg-light {
  background-color: #1f1f1f !important;
  color: #f1f1f1 !important;
}
body.dark-mode .btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.hero-text {
  animation: fadeInUp 0.8s ease-out;
}
.section-animate {
  animation: fadeInUp 0.6s ease-out;
}

/* Image */
img {
  max-height: 600px;
}
.mockup-effect {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.mockup-effect:hover {
  transform: scale(1.05);
}
.mockup-gradient {
  filter: brightness(1.1) contrast(1.1) drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
  transition: filter 
}
body.dark-mode .navbar.bg-dark {
  background-color: #1e1e1e !important;
}
.testimonial-slider {
  scroll-snap-type: x mandatory;
}

.testimonial-card {
  background-color: #fff;
  width: 300px;
  height: 200PX;
  scroll-snap-align: start;
  border-radius: 10px;
  transition: transform 0.3s ease;
}
.testimonial-card:hover {
  transform: translateY(-5px);
}

body.dark-mode .testimonial-card {
  background-color: #2a2a2a;
  color: #f1f1f1;
}
.download-section {
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: #fff;
}

.qr-wrapper {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  max-width: 220px;
}

.qr-wrapper img {
  border-radius: 8px;
  width: 100%;
  height: auto;
}


</style>