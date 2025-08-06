<template>
  <div>
    <!-- Hero -->
    <section id="hero" class="py-5 bg-light section-animate">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12 text-start mb-4 mb-md-0 hero-text">
            <h1 class="display-4 fw-bold">{{ $t('hero_title') }}</h1>
            <h2 class="h3 text-muted mb-3">{{ $t('hero_subtitle') }}</h2>
            <p class="lead text-muted">{{ $t('hero_description') }}</p>
            <div class="d-flex gap-3">
              <router-link to="/order" class="btn btn-primary btn-lg">{{ $t('button_order') }}</router-link>
              <router-link to="/discover" class="btn btn-outline-primary btn-lg">{{ $t('button_discover') }}</router-link>
            </div>
          </div>
          <div class="col-md-6 col-12 text-center">
            <img :src="require('@/assets/mockup4.png')" alt="Mockup Shoplink"
                 class="img-fluid mockup-effect mockup-gradient" />
          </div>
        </div>
      </div>
    </section>

    <!-- Notre Histoire -->
    <section id="story" class="py-5 bg-white section-animate">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5 text-center mb-4 mb-md-0">
            <img src="https://i.pravatar.cc/200?img=8" alt="Fondateur" class="rounded-circle shadow" width="180" />
          </div>
          <div class="col-md-7">
            <h2 class="fw-bold mb-3">{{ $t('story_title') }}</h2>
            <blockquote class="blockquote">
              <p class="mb-2">"{{ $t('story_quote') }}"</p>
              <footer class="blockquote-footer">{{ $t('story_author') }}</footer>
            </blockquote>
            <p class="lead">{{ $t('story_description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Packs -->
    <section id="packs" class="py-5 bg-light section-animate">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">{{ $t('packs_title') }}</h2>
          <p class="lead text-muted">{{ $t('packs_subtitle') }}</p>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4 mb-4">
            <div class="card shadow h-100 pack-card">
              <div class="card-body text-center">
                <h5 class="card-title">{{ $t('pack_discovery_title') }}</h5>
                <p class="card-text">{{ $t('pack_discovery_desc') }}</p>
                <p class="display-6 fw-bold mb-3 text-primary">{{ $t('pack_discovery_price') }}</p>
                <button class="btn btn-primary">{{ $t('button_discover') }}</button>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card shadow h-100 pack-card">
              <div class="card-body text-center">
                <h5 class="card-title">{{ $t('pack_pro_title') }}</h5>
                <p class="card-text">{{ $t('pack_pro_desc') }}</p>
                <p class="display-6 fw-bold mb-3 text-primary">{{ $t('pack_pro_price') }}</p>
                <button class="btn btn-primary">{{ $t('button_order') }}</button>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card shadow h-100 pack-card">
              <div class="card-body text-center">
                <h5 class="card-title">{{ $t('pack_unlimited_title') }}</h5>
                <p class="card-text">{{ $t('pack_unlimited_desc') }}</p>
                <p class="display-6 fw-bold mb-3 text-primary">{{ $t('pack_unlimited_price') }}</p>
                <button class="btn btn-primary">{{ $t('button_order') }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- La Science derrière -->
    <section id="science" class="py-5 bg-white section-animate">
      <div class="container text-center">
        <h2 class="fw-bold mb-3">{{ $t('science_title') }}</h2>
        <h3 class="h4 text-muted mb-4">{{ $t('science_subtitle') }}</h3>
        <p class="lead mb-5">{{ $t('science_description') }}</p>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="science-card p-4">
                  <i class="fas fa-code fa-3x text-primary mb-3"></i>
                  <h5>100% API Native</h5>
                  <p>Intégration parfaite avec vos systèmes existants</p>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="science-card p-4">
                  <i class="fab fa-apple fa-3x text-primary mb-3"></i>
                  <h5>Interface iOS 17+</h5>
                  <p>Design moderne et intuitif pour tous les utilisateurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Preuve Sociale -->
    <section id="social-proof" class="py-5 bg-light section-animate">
      <div class="container text-center">
        <h2 class="fw-bold mb-3">{{ $t('social_proof_title') }}</h2>
        <p class="lead mb-5">{{ $t('social_proof_subtitle') }}</p>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="testimonial in testimonials" :key="testimonial.name">
            <div class="card shadow-sm h-100 testimonial-card">
              <div class="card-body text-center">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="rounded-circle mb-3" width="60" />
                <p class="card-text">"{{ testimonial.quote }}"</p>
                <h6 class="card-title mb-1">{{ testimonial.name }}</h6>
                <small class="text-muted">{{ testimonial.company }}</small>
              </div>
            </div>
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

    <!-- Newsletter -->
    <section id="newsletter" class="py-5 bg-primary text-white section-animate">
      <div class="container text-center">
        <h2 class="fw-bold mb-3">{{ $t('newsletter_title') }}</h2>
        <p class="lead mb-4">{{ $t('newsletter_subtitle') }}</p>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="input-group mb-3">
              <input type="email" class="form-control" :placeholder="$t('newsletter_placeholder')" v-model="newsletterEmail" />
              <button class="btn btn-light" @click="subscribeNewsletter">{{ $t('newsletter_button') }}</button>
            </div>
            <div v-if="newsletterMessage" :class="['alert', newsletterSuccess ? 'alert-success' : 'alert-danger']">
              {{ newsletterMessage }}
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
import ContactModal from './ContactModal.vue';
export default {

  name: 'App',

  data() {
    return {
      isDarkMode: false,
      showModal: false,
      newsletterEmail: '',
      newsletterMessage: '',
      newsletterSuccess: false,
      downloadLink: 'https://shoplink.app',
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
          quote: "L'interface est fluide et intuitive — nos clients l'ont adorée.",
          avatar: 'https://i.pravatar.cc/100?img=4'
        },
        {
          name: "Inès M.",
          company: "Leclerc IT",
          quote: "L'intégration API a été rapide et efficace. Top outil !",
          avatar: 'https://i.pravatar.cc/100?img=5'
        }
      ]
    }
  },
  watch: {
    isDarkMode(val) {
      document.body.classList.toggle('dark-mode', val);
    }
  },
  methods: {
    subscribeNewsletter() {
      if (this.newsletterEmail && this.newsletterEmail.includes('@')) {
        this.newsletterSuccess = true;
        this.newsletterMessage = this.$t('newsletter_success');
        this.newsletterEmail = '';
        setTimeout(() => {
          this.newsletterMessage = '';
        }, 5000);
      } else {
        this.newsletterSuccess = false;
        this.newsletterMessage = this.$t('newsletter_error');
        setTimeout(() => {
          this.newsletterMessage = '';
        }, 3000);
      }
    }
  },
  components: {
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
  transition: filter 0.3s ease;
}

/* Pack Cards */
.pack-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
}
.pack-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2) !important;
}

/* Science Cards */
.science-card {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 15px;
  transition: transform 0.3s ease;
}
.science-card:hover {
  transform: translateY(-5px);
}

/* Testimonial Cards */
.testimonial-card {
  transition: transform 0.3s ease;
  border: none;
}
.testimonial-card:hover {
  transform: translateY(-5px);
}

body.dark-mode .navbar.bg-dark {
  background-color: #1e1e1e !important;
}

body.dark-mode .testimonial-card {
  background-color: #2a2a2a;
  color: #f1f1f1;
}

.download-section {
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: #fff;
}

body.dark-mode .text-muted {
  color: #e0e0e0 !important;
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

/* Newsletter Section */
#newsletter {
  background: linear-gradient(135deg, #0d6efd, #0b5ed7);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .display-6 {
    font-size: 1.5rem;
  }
  .pack-card {
    margin-bottom: 2rem;
  }
}
</style>