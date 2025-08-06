<template>
  <div v-if="pack">
    <!-- Hero Section -->
    <section class="py-5 bg-gradient-primary text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1 class="display-4 fw-bold mb-4">{{ pack.title }}</h1>
            <p class="lead mb-4">{{ pack.description }}</p>
            <div class="d-flex align-items-center mb-4">
              <span class="display-5 fw-bold me-3">{{ pack.price }}</span>
              <span class="badge bg-warning text-dark">30 jours d'essai gratuit</span>
            </div>
            <button @click="buyNow" class="btn btn-light btn-lg me-3">Acheter maintenant</button>
            <router-link to="/order" class="btn btn-outline-light btn-lg">Voir tous les packs</router-link>
          </div>
          <div class="col-md-6 text-center">
            <img :src="pack.image" :alt="pack.title" class="img-fluid" style="max-height: 400px;" />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Ce qui est inclus</h2>
        <div class="row">
          <div class="col-md-6 mb-4" v-for="feature in pack.features" :key="feature">
            <div class="d-flex align-items-start">
              <i class="fas fa-check-circle text-success fa-2x me-3 mt-1"></i>
              <div>
                <h5>{{ feature.title }}</h5>
                <p class="text-muted">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Specs -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Spécifications techniques</h2>
        <div class="row">
          <div class="col-md-8 mx-auto">
            <div class="table-responsive">
              <table class="table table-borderless">
                <tbody>
                  <tr v-for="spec in pack.specifications" :key="spec.name">
                    <td class="fw-bold">{{ spec.name }}</td>
                    <td>{{ spec.value }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshots -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Aperçu de l'application</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(screenshot, index) in pack.screenshots" :key="index">
            <img :src="screenshot" :alt="`Screenshot ${index + 1}`" class="img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Avis clients</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="testimonial in pack.testimonials" :key="testimonial.name">
            <div class="card h-100">
              <div class="card-body text-center">
                <div class="mb-3">
                  <i class="fas fa-star text-warning" v-for="n in 5" :key="n"></i>
                </div>
                <p class="card-text">"{{ testimonial.quote }}"</p>
                <h6 class="card-title mb-1">{{ testimonial.name }}</h6>
                <small class="text-muted">{{ testimonial.company }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Comparison -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Comparaison des packs</h2>
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead class="table-primary">
                  <tr>
                    <th>Fonctionnalité</th>
                    <th class="text-center">Pack Découverte</th>
                    <th class="text-center">Pack Pro</th>
                    <th class="text-center">Pack Illimité</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="comparison in comparisons" :key="comparison.feature">
                    <td class="fw-bold">{{ comparison.feature }}</td>
                    <td class="text-center">
                      <i :class="comparison.discovery ? 'fas fa-check text-success' : 'fas fa-times text-muted'"></i>
                    </td>
                    <td class="text-center">
                      <i :class="comparison.pro ? 'fas fa-check text-success' : 'fas fa-times text-muted'"></i>
                    </td>
                    <td class="text-center">
                      <i :class="comparison.unlimited ? 'fas fa-check text-success' : 'fas fa-times text-muted'"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-5 bg-primary text-white">
      <div class="container text-center">
        <h2 class="fw-bold mb-4">Prêt à essayer {{ pack.title }} ?</h2>
        <p class="lead mb-4">Rejoignez des milliers d'utilisateurs satisfaits</p>
        <div class="d-flex justify-content-center gap-3">
          <button @click="buyNow" class="btn btn-light btn-lg">Acheter maintenant</button>
          <router-link to="/discover" class="btn btn-outline-light btn-lg">En savoir plus</router-link>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="container py-5 text-center">
    <h1>Pack introuvable</h1>
    <p>Le pack que vous recherchez n'existe pas.</p>
    <router-link to="/order" class="btn btn-primary">Voir tous les packs</router-link>
  </div>
</template>

<script>
const PACKS_DATA = {
  1: {
    id: 1,
    title: 'Pack Découverte',
    description: 'Parfait pour essayer Shoplink et découvrir ses fonctionnalités de base.',
    price: '19,00 €',
    image: require('@/assets/mockup2.png'),
    features: [
      { title: '12 utilisations', description: 'Accès à l\'application pendant 12 sessions' },
      { title: '1 fonctionnalité', description: 'Scan de produits avec reconnaissance automatique' },
      { title: 'Support email', description: 'Assistance par email sous 24h' },
      { title: 'Mise à jour gratuite', description: 'Accès aux nouvelles versions' }
    ],
    specifications: [
      { name: 'Compatibilité', value: 'iOS 12+, Android 8+' },
      { name: 'Taille', value: '45 MB' },
      { name: 'Langues', value: 'Français, Anglais' },
      { name: 'Stockage', value: '100 MB' }
    ],
    screenshots: [
      require('@/assets/mockup3.png'),
      require('@/assets/mockup4.png'),
      require('@/assets/MOCKUP0.png')
    ],
    testimonials: [
      {
        name: "Jean P.",
        company: "Retraité",
        quote: "Simple à utiliser, même pour quelqu'un comme moi qui n'est pas très à l'aise avec la technologie."
      },
      {
        name: "Emma R.",
        company: "Étudiante",
        quote: "Parfait pour mes petites courses. Je gagne vraiment du temps !"
      },
      {
        name: "Marc L.",
        company: "Père de famille",
        quote: "L'essai gratuit m'a convaincu. Maintenant je ne peux plus m'en passer."
      }
    ]
  },
  2: {
    id: 2,
    title: 'Pack Pro',
    description: 'Le choix le plus populaire pour les utilisateurs réguliers.',
    price: '34,00 €',
    image: require('@/assets/mockup1.png'),
    features: [
      { title: '24 utilisations', description: 'Accès étendu pendant 24 sessions' },
      { title: '2 fonctionnalités', description: 'Scan + Panier intelligent' },
      { title: 'Support prioritaire', description: 'Assistance prioritaire sous 4h' },
      { title: 'Mise à jour gratuite', description: 'Accès aux nouvelles versions' },
      { title: 'Sauvegarde cloud', description: 'Sauvegarde automatique de vos données' }
    ],
    specifications: [
      { name: 'Compatibilité', value: 'iOS 12+, Android 8+' },
      { name: 'Taille', value: '45 MB' },
      { name: 'Langues', value: 'Français, Anglais' },
      { name: 'Stockage', value: '500 MB' },
      { name: 'Sauvegarde', value: 'Cloud sécurisé' }
    ],
    screenshots: [
      require('@/assets/mockup2.png'),
      require('@/assets/mockup3.png'),
      require('@/assets/mockup4.png')
    ],
    testimonials: [
      {
        name: "Sophie L.",
        company: "Auchan Manager",
        quote: "Shoplink a simplifié notre parcours client dès la première semaine."
      },
      {
        name: "Thomas G.",
        company: "Carrefour UX Lead",
        quote: "L'interface est fluide et intuitive — nos clients l'ont adorée."
      },
      {
        name: "Inès M.",
        company: "Leclerc IT",
        quote: "L'intégration API a été rapide et efficace. Top outil !"
      }
    ]
  },
  3: {
    id: 3,
    title: 'Pack Illimité',
    description: 'Pour les utilisateurs intensifs qui veulent tout avoir.',
    price: '59,00 €',
    image: require('@/assets/MOCKUP0.png'),
    features: [
      { title: 'Utilisation illimitée', description: 'Accès illimité à toutes les fonctionnalités' },
      { title: 'Toutes fonctionnalités', description: 'Scan, panier, paiement, historique complet' },
      { title: 'Support 24/7', description: 'Assistance téléphonique 24h/24 et 7j/7' },
      { title: 'Mise à jour gratuite', description: 'Accès aux nouvelles versions' },
      { title: 'Sauvegarde cloud', description: 'Sauvegarde automatique de vos données' },
      { title: 'API personnalisée', description: 'Intégration avec vos systèmes existants' }
    ],
    specifications: [
      { name: 'Compatibilité', value: 'iOS 12+, Android 8+' },
      { name: 'Taille', value: '45 MB' },
      { name: 'Langues', value: 'Français, Anglais' },
      { name: 'Stockage', value: 'Illimité' },
      { name: 'Sauvegarde', value: 'Cloud sécurisé' },
      { name: 'API', value: 'REST API incluse' }
    ],
    screenshots: [
      require('@/assets/mockup1.png'),
      require('@/assets/mockup2.png'),
      require('@/assets/mockup3.png')
    ],
    testimonials: [
      {
        name: "Marie D.",
        company: "Directrice Marketing",
        quote: "L'API personnalisée nous a permis d'intégrer Shoplink à notre système existant en quelques jours."
      },
      {
        name: "Pierre F.",
        company: "CTO Startup",
        quote: "Le support 24/7 est exceptionnel. Ils répondent vraiment à toutes nos questions."
      },
      {
        name: "Lucie M.",
        company: "Chef de projet",
        quote: "L'utilisation illimitée nous permet de tester toutes les fonctionnalités sans restriction."
      }
    ]
  }
};

const COMPARISONS = [
  { feature: 'Scan de produits', discovery: true, pro: true, unlimited: true },
  { feature: 'Panier intelligent', discovery: false, pro: true, unlimited: true },
  { feature: 'Paiement hybride', discovery: false, pro: false, unlimited: true },
  { feature: 'Historique complet', discovery: false, pro: false, unlimited: true },
  { feature: 'Support prioritaire', discovery: false, pro: true, unlimited: true },
  { feature: 'API personnalisée', discovery: false, pro: false, unlimited: true },
  { feature: 'Sauvegarde cloud', discovery: false, pro: true, unlimited: true }
];

export default {
  name: 'ProductDetail',
  props: ['id'],
  data() {
    return {
      comparisons: COMPARISONS
    }
  },
  computed: {
    pack() {
      return PACKS_DATA[Number(this.$route.params.id)];
    }
  },
  methods: {
    buyNow() {
      // Logique d'achat
      alert(`Achat du ${this.pack.title} pour ${this.pack.price}`);
      // Ici tu pourrais rediriger vers un système de paiement
    }
  }
}
</script>

<style scoped>
.bg-gradient-primary {
  background: linear-gradient(135deg, #0d6efd, #0b5ed7);
}

.table th {
  border-top: none;
}

.table td {
  vertical-align: middle;
}
</style>