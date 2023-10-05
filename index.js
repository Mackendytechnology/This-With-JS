const mackenIT = {
  cours: "Javascript",
  email: "bouquetmackendy34@gmail.com",
  etudiant: [],

  login(nom, prenom) {
    console.log(`${nom} ${prenom} you are in ${this.cours}
          your email is ${this.email}`);
    this.etudiant.push(`${nom} ${prenom}`);
  },
};

mackenIT.login("Mackendy", "Bouquet");
console.log(mackenIT.etudiant);
