<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <button @click="closeModal" class="close">×</button>
      <h2>Contactez-nous</h2>
      
      <form @submit.prevent="submitForm">
        <select v-model="form.motif">
          <option disabled value="">Motif du message</option>
          <option>Demande d’infos</option>
          <option>Partenariat</option>
          <option>Bug</option>
          <option>Autre</option>
        </select>

        <input type="text" v-model="form.prenom" placeholder="Prénom" required />
        <input type="text" v-model="form.nom" placeholder="Nom" required />
        <input type="email" v-model="form.email" placeholder="Email" required />

        <div class="profil">
          <label>
            <input type="radio" value="particulier" v-model="form.profil" />
            Particulier
          </label>
          <label>
            <input type="radio" value="entreprise" v-model="form.profil" />
            Entreprise
          </label>
        </div>

        <input v-if="form.profil === 'entreprise'" type="text" v-model="form.nomEntreprise" placeholder="Nom de l'entreprise" />

        <textarea v-model="form.message" placeholder="Votre message..." maxlength="1000"></textarea>
        <input type="file" @change="handleFileUpload" />

        <button type="submit">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: true,
      form: {
        motif: '',
        prenom: '',
        nom: '',
        email: '',
        profil: '',
        nomEntreprise: '',
        message: '',
        file: null
      }
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    handleFileUpload(event) {
      this.form.file = event.target.files[0];
    },
    submitForm() {
      // Envoi logique ici (API ou service tiers)
      alert("Message envoyé !");
      this.closeModal();
    }
  }
};
</script>
<style scoped>
/* --- MODAL BACKDROP --- */
.modal {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: fadeIn 0.3s ease-in-out;
}

/* --- MODAL BOX --- */
.modal-content {
  background-color: #706666;
  color: #f5f5f5;
  border-radius: 10px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

/* --- CLOSE BUTTON --- */
.close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.8rem;
  color: #aaa;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
}
.close:hover {
  color: #fff;
}

/* --- FORM ELEMENTS --- */
input,
select,
textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 6px;
  background-color: #2b2b2b;
  color: #f0f0f0;
  font-size: 1rem;
  transition: background 0.2s ease;
}
input:focus,
textarea:focus,
select:focus {
  outline: none;
  background-color: #3a3a3a;
}

/* --- RADIO BUTTONS --- */
.profil {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.profil label {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
}
.profil input[type="radio"] {
  margin-right: 0.5rem;
}

/* --- FILE INPUT --- */
input[type="file"] {
  background-color: transparent;
  border: none;
  padding: 0;
  color: #ccc;
}

/* --- SUBMIT BUTTON --- */
button[type="submit"] {
  background-color: #3f8efc;
  color: white;
  border: none;
  padding: 0.8rem 1.4rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}
button[type="submit"]:hover {
  background-color: #2b6ed9;
}

/* --- ANIMATION --- */
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>