<template>
  <div class="stretched main-bg">
    <article class="article">
      <header>
        <section class="content">
          <h1>
            Design of an Educational Game to Foster Self-regulated Learning
          </h1>
        </section>
        <div>
          <address class="author">
            <h2>
              <a
                rel="author"
                href="mailto: nathalie.zetzmann@uni-saarland.de"
              >
                Nathalie Zetzmann
              </a>
              <a
                rel="author"
                href="mailto: s9tiboeh@stud.uni-saarland.de"
              >
                Tim Moritz Böhm

              </a>
              <a
                rel="author"
                href="f.perels@mx.uni-saarland.de"
              >
                Franziska Perels
              </a>
            </h2>
            <h3>
              Saarland University, Saarbrücken, Germany
            </h3>
          </address>
          on
          <time
            pubdate
            datetime="2021-09-01"
            title="September 1st, 2021"
          >
            September 2021
          </time>
          <p>
            DOI: 10.34190/GBL.21.054
          </p>
          <p>
            Conference: European Conference on Game Based Learning, At: Brighton, UK
          </p>
        </div>
      </header>

      <div class="article-content">
        <b>Abstract:</b> As academic achievement is an important goal of teaching and learning, it is important to provide mental tools to
        enable efficient learning. In this context, self-regulated learning (SRL) is an essential factor to apply adequate learning
        strategies which facilitate lifelong learning and academic achievement (Richardson, Abraham & Bond, 2012). Because digital
        games are highly motivating (Chang et al., 2017), they can be used to support learning processes and foster interdisciplinary
        abilities such as SRL (Erhel & Jamet, 2013). Due to this, the educational game Regulatia was developed to promote SRL in
        pre-service teachers in the university setting. Multimedia principles for multimedia learning (Mayer, 2014) and
        for gamebased learning (Mayer, 2019) were considered in game design. The design process followed the ADDIE approach and the
        theoretical content was based on Zimmerman’s model of SRL (2000). In this educational game, players immerse themselves
        in the underwater kingdom Regulatia and have to help the little whale, Balina, to rescue her friend from the Coral Tower.
        Players have to find self-regulation keepers on each of six levels and solve their exercises. The exercises impart SRL-specific
        strategies and link game-design elements with learning content. In this paper, we provide an overview of Regulatia’s
        theoretical background, design and and structure, all of which aim to promote SRL. Since the educational game is still under
        development, our goal is to create a functional prototype and evaluate its effectiveness to foster SRL in different higher
        education courses. The preliminary evaluation design is also reported in this paper. It is expected that especially in preservice
        teacher training Regulatia could make important contributions to the acquisition of SRL by pre-service teachers
        and their students, given that teachers act as SRL-models for their students (Peeters et al., 2014)
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/background.scss';
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

article {
  text-align: center;
  width: 90%;
}

.article-content {
  display: block;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  line-height: 2rem;
  border-left: 0.5em solid #a7a743;
  background-color:#8fc2d0;
  text-align: justify;
  letter-spacing: 1px;
  padding: 1rem;
}
.author {
  padding: 1rem;
}
.author a {
  padding: 0 0.5rem;
  color: #000;
  text-decoration: underline;
}
.author a:hover {
  color: #656262;
  text-decoration:underline;
  cursor:pointer;
}

.content {
  text-align: center;
  padding-left: 7rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  align-items: center;
}
</style>
