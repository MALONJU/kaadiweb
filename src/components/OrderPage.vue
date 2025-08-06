<template>
  <div>
    <!-- Hero Section -->
    <section class="py-5 bg-gradient-primary text-white">
      <div class="container text-center">
        <h1 class="display-4 fw-bold mb-4">Choisissez votre pack Shoplink</h1>
        <p class="lead mb-4">Commencez dès aujourd'hui à révolutionner vos courses</p>
      </div>
    </section>

    <!-- Packs Section -->
    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4 mb-4" v-for="pack in packs" :key="pack.id">
            <div class="card h-100 shadow pack-card" :class="{ 'featured': pack.featured }">
              <div class="card-body text-center p-4">
                <div v-if="pack.featured" class="badge bg-warning text-dark position-absolute top-0 start-50 translate-middle-x mt-3">
                  POPULAIRE
                </div>
                <h3 class="card-title mb-3">{{ pack.title }}</h3>
                <p class="card-text text-muted mb-4">{{ pack.desc }}</p>
                
                <div class="price-section mb-4">
                  <span class="display-4 fw-bold text-primary">{{ pack.price }}</span>
                  <span class="text-muted">/pack</span>
                </div>

                <ul class="list-unstyled mb-4">
                  <li v-for="feature in pack.features" :key="feature" class="mb-2">
                    <i class="fas fa-check text-success me-2"></i>{{ feature }}
                  </li>
                </ul>

                <router-link :to="`/pack/${pack.id}`" class="btn btn-outline-primary w-100 mb-2">
                  Voir les détails
                </router-link>
                <button @click="selectPack(pack)" class="btn btn-primary w-100">
                  {{ pack.featured ? 'Commander maintenant' : 'Choisir ce pack' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Pourquoi acheter Shoplink ?</h2>
        <div class="row">
          <div class="col-md-3 text-center mb-4">
            <i class="fas fa-clock fa-3x text-primary mb-3"></i>
            <h5>Gagnez du temps</h5>
            <p>Évitez les files d'attente aux caisses</p>
          </div>
          <div class="col-md-3 text-center mb-4">
            <i class="fas fa-mobile-alt fa-3x text-primary mb-3"></i>
            <h5>Interface intuitive</h5>
            <p>Design moderne inspiré d'iOS 17+</p>
          </div>
          <div class="col-md-3 text-center mb-4">
            <i class="fas fa-shield-alt fa-3x text-primary mb-3"></i>
            <h5>100% sécurisé</h5>
            <p>Paiements et données protégés</p>
          </div>
          <div class="col-md-3 text-center mb-4">
            <i class="fas fa-headset fa-3x text-primary mb-3"></i>
            <h5>Support 24/7</h5>
            <p>Assistance technique disponible</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Guarantee Section -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h2 class="fw-bold mb-4">Garantie satisfait ou remboursé</h2>
            <p class="lead mb-4">Nous sommes convaincus que Shoplink va transformer votre expérience d'achat. Si ce n'est pas le cas dans les 30 premiers jours, nous vous remboursons intégralement.</p>
            <div class="d-flex align-items-center mb-3">
              <i class="fas fa-check-circle text-success fa-2x me-3"></i>
              <span>30 jours d'essai gratuit</span>
            </div>
            <div class="d-flex align-items-center mb-3">
              <i class="fas fa-check-circle text-success fa-2x me-3"></i>
              <span>Remboursement intégral</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="fas fa-check-circle text-success fa-2x me-3"></i>
              <span>Aucune question posée</span>
            </div>
          </div>
          <div class="col-md-6 text-center">
            <img :src="require('@/assets/mockup1.png')" alt="Garantie" class="img-fluid" style="max-height: 300px;" />
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Questions fréquentes</h2>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="accordion" id="faqAccordion">
              <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
                <h2 class="accordion-header">
                  <button class="accordion-button" :class="{ collapsed: index !== 0 }" type="button" data-bs-toggle="collapse" :data-bs-target="`#faq${index}`">
                    {{ faq.question }}
                  </button>
                </h2>
                <div :id="`faq${index}`" class="accordion-collapse collapse" :class="{ show: index === 0 }" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-5 bg-primary text-white">
      <div class="container text-center">
        <h2 class="fw-bold mb-4">Prêt à commencer ?</h2>
        <p class="lead mb-4">Rejoignez des milliers d'utilisateurs satisfaits</p>
        <button @click="scrollToTop" class="btn btn-light btn-lg">Voir les packs</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'OrderPage',
  data() {
    return {
      packs: [
        {
          id: 1,
          title: 'Pack Découverte',
          desc: 'Parfait pour essayer Shoplink',
          price: '19,00 €',
          features: [
            '12 utilisations',
            '1 fonctionnalité',
            'Support email',
            'Mise à jour gratuite'
          ],
          featured: false
        },
        {
          id: 2,
          title: 'Pack Pro',
          desc: 'Le choix le plus populaire',
          price: '34,00 €',
          features: [
            '24 utilisations',
            '2 fonctionnalités',
            'Support prioritaire',
            'Mise à jour gratuite',
            'Sauvegarde cloud'
          ],
          featured: true
        },
        {
          id: 3,
          title: 'Pack Illimité',
          desc: 'Pour les utilisateurs intensifs',
          price: '59,00 €',
          features: [
            'Utilisation illimitée',
            'Toutes fonctionnalités',
            'Support 24/7',
            'Mise à jour gratuite',
            'Sauvegarde cloud',
            'API personnalisée'
          ],
          featured: false
        }
      ],
      faqs: [
        {
          question: "Comment fonctionne l'essai gratuit ?",
          answer: "Vous pouvez tester Shoplink gratuitement pendant 30 jours. Si vous n'êtes pas satisfait, nous vous remboursons intégralement."
        },
        {
          question: "L'application fonctionne-t-elle sur tous les smartphones ?",
          answer: "Oui, Shoplink est compatible avec iOS 12+ et Android 8+. L'interface s'adapte automatiquement à votre écran."
        },
        {
          question: "Mes données sont-elles sécurisées ?",
          answer: "Absolument. Nous utilisons un chiffrement de niveau bancaire et ne partageons jamais vos données personnelles."
        },
        {
          question: "Puis-je annuler mon abonnement ?",
          answer: "Oui, vous pouvez annuler à tout moment depuis votre compte. Aucun engagement à long terme."
        }
      ]
    }
  },
  methods: {
    selectPack(pack) {
      // Logique pour sélectionner un pack
      console.log('Pack sélectionné:', pack);
      this.$router.push(`/pack/${pack.id}`);
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.bg-gradient-primary {
  background: linear-gradient(135deg, #0d6efd, #0b5ed7);
}

.pack-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
}

.pack-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
}

.pack-card.featured {
  border-color: #ffc107;
  transform: scale(1.05);
}

.price-section {
  padding: 1rem 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
</style>