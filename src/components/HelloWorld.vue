<script setup>
import { ref } from 'vue'

// Non sembra che utilizzerai 'msg' e 'count' per questa pagina,
// quindi potresti rimuoverli se non sono necessari.
// Ho lasciato il codice commentato come esempio.

// defineProps({
//   msg: String,
// })

// const count = ref(0)
</script>

<template>
  <h1>Benvenuto nel mio Portfolio</h1>

  <p>Qui puoi trovare alcuni dei progetti su cui ho lavorato e ciò che mi appassiona.</p>

  <!-- Sezione progetti -->
  <section>
    <h2>I miei progetti</h2>
    <div class="project">
      <h3>Progetto 1</h3>
      <p>Breve descrizione del Progetto 1. Cosa fa, quali tecnologie utilizza, ecc.</p>
      <a href="link-al-progetto" target="_blank">Scopri di più</a>
    </div>
    <div class="project">
      <!-- Ripeti per altri progetti -->
    </div>
  </section>

  <!-- Sezione riguardo a te -->
  <section>
    <h2>Chi sono</h2>
    <p>Una breve biografia che parla di te, delle tue competenze e delle tue passioni.</p>
  </section>

  <!-- Sezione contatti -->
  <section>
    <h2>Contattami</h2>
    <p>Sei interessato a lavorare insieme o vuoi saperne di più? Non esitare a contattarmi.</p>
    <p>Email: <a href="mailto:tuaemail@example.com">tuaemail@example.com</a></p>
    <!-- Aggiungi altri metodi di contatto se necessario -->
  </section>
</template>

<style scoped>
/* Stili di base, personalizzali a tuo piacimento */
h2 {
  margin-top: 20px;
}

.project {
  margin-bottom: 15px;
}

.read-the-docs {
  color: #888;
}
</style>

