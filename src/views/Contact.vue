<template>
  <b-container class="contact">
    <div class="contact-wrapper">
      <div class="info-map-container">
        <div class="information">
          <h2>Öppettider</h2>
          <div class="timetable-wrap">
            <div class="timetable-container flex">
              <div class="schedule-wrap flex">
                <div class="schedule flex">
                  <!-- Flexbox Information -->
                  <div class="class-container flex">
                    <div class="flex-header">Dag</div>
                    <div>Måndagar:</div>
                    <div>Tisdagar:</div>
                    <div>Lördagar:</div>
                  </div>
                  <div class="class-container flex">
                    <div class="flex-header">Check-in</div>
                    <div>17:30 - 18:00</div>
                    <div>17:00 - 17:30</div>
                    <div>09:30 - 10:00</div>
                  </div>
                  <div class="class-container flex">
                    <div class="flex-header">Workshop</div>
                    <div>18:00 - 19:00</div>
                    <div>17:30 - 18:30</div>
                    <div>10:00 - 11:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="location mt-2 mb-4">
        <h2>Hitta hit!</h2>
        <div id="map">
          <div class="row">
            <div class="col-sm-6">
              <div class="card mt-4 mb-4">
                <div class="google-maps">
                  <iframe
                    width="600"
                    height="450"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.2064756331365!2d13.194473516095348!3d55.70278268053998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465397c452a1a549%3A0xd65293182f0c2b6a!2sKiliansgatan%2013%2C%20223%2050%20Lund!5e0!3m2!1ssv!2sse!4v1580062435970!5m2!1ssv!2sse"
                    id="gmap_canvas"
                    class="google"
                  ></iframe>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="map-info mt-4">
                <h5>Adress:</h5>
                <p>
                  Kiliansgatan 13,
                  <br />
                  223 50 LUND
                </p>
                <h5>Riktmärke:</h5>
                <p>Lokalen är belägen inne på Lunds Statsteater.</p>
                <h5>Vägbeskrivning:</h5>
                <p>
                  Gå in genom huvudporten för att sedan ta dörren till vänster
                  upp för trapporna. Sedan är det dörren längst bort till höger
                  i korridoren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "contact",
  components: {}
};
</script>

<style lang="scss" scoped>
.contact {
  max-width: 800px;
  position: relative;
  .contact-wrapper {
    margin-top: 8rem;
  }
  @media only screen and (max-width: 768px) {
    .contact-wrapper {
      margin-top: 6rem;
    }
  }
  .info-map-container {
    display: flex;
    flex-direction: column;
    .information {
      padding: 20px;
      width: 100%;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.3);
      .flex {
        display: flex;
        justify-content: space-evenly;
      }
      .timetable-container {
        margin-top: 1em;
        flex-grow: 1;
        flex-direction: row;
        color: var(--text);
        &:first-child {
          margin-top: 0;
        }
      }
      .schedule {
        flex-direction: row;
      }
      .class-container {
        .flex-header {
          font-weight: bold;
          font-size: 1.5rem;
          margin-bottom: 3px;
        }
      }
      @media only screen and (min-width: 769px) {
        .schedule-wrap {
          flex-direction: row;
          flex-grow: 1;
        }
        .schedule {
          margin-top: 0.5em;
          width: 100%;
          justify-content: space-evenly;
        }
        .class-container {
          flex-direction: column;
          padding: 1em 2px;
        }
      }
      @media only screen and (max-width: 768px) {
        .schedule-wrap {
          flex-grow: 1;
        }
        .schedule {
          width: 100%;
          justify-content: space-between;
        }
        .class-container {
          flex-direction: column;
          padding-bottom: 1em;
          .flex-header {
            font-weight: bold;
            font-size: 0.9rem;
            margin-bottom: 3px;
          }
        }
      }
    }
    @media only screen and (max-width: 330px) {
      .information {
        padding: 0;
      }
    }
  }
  .location {
    padding: 20px;
    width: 100%;
    border-radius: 10px;
    color: var(--text);
    background-color: rgba(0, 0, 0, 0.3);
  }
  h2 {
    text-align: center;
    font-weight: bold;
    color: var(--breakOffColor) !important;
  }
  h5 {
    margin-bottom: 0 !important;
  }
  p {
    margin-bottom: 10px !important;
  }
  // #map {
  .google-maps {
    position: relative;
    padding-bottom: 75%; // This is the aspect ratio
    height: 0;
    overflow: hidden;
    border: none;
  }
  .google-maps iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    border: none;
    .google {
      margin: 10px;
    }
  }
  // }
}
</style>
