<template>
  <div class="container">
    <form class="form-wrapper" @submit.prevent="onsubmit">
      <fieldset>
        <legend> Форма создания Клиента</legend>
        <div class="form-item">
          <label for="surname">Фамилия*</label>
          <input
              id="surname"
              v-model="surname"
              type="text"
              name="surname"
          >
        </div>

        <div class="form-item">
          <label for="name">Имя*</label>
          <input
              id="name"
              v-model="name"
              type="text"
              name="name"
          >
        </div>

        <div class="form-item">
          <label for="middleName">Отчество*</label>
          <input
              id="middleName"
              v-model="middleName"
              type="text"
              name="middleName"
          >
        </div>

        <div class="form-item">
          <label for="birthday">Дата рождения*</label>
          <input
              id="birthday"
              v-model="birthday"
              type="date"
              name="birthday"
          >
        </div>

        <div class="form-item">
          <label for="phoneNumber">Номер телефона*</label>
          <input
              id="phoneNumber"
              v-model="phoneNumber"
              type="tel"
              name="phoneNumber"
              placeholder="11 цифр. Начинается с 7"
          >
        </div>

        <div class="form-item">
          <label for="gender">Пол</label>
          <select v-model="gender"
                  id="gender"
                  name="gender">
            <option disabled value="">Выберите пол</option>
            <option>Женский</option>
            <option>Мужской</option>
          </select>
          <span>Выбрано: {{ gender }}</span>
        </div>

        <div class="form-item">
          <label for="typesClients">Группа клиентов*</label>
          <select v-model="selectedTypeClient"
                  id="typesClients"
                  name="typesClients" multiple>

            <option v-for="type in typesClients" :key="type.id">
              {{ type.text }}
            </option>
          </select>
          <br>
          <span>Выбрано: {{ selectedTypeClient }}</span>
        </div>

        <div class="form-item">
          <label for="doctors">Лечащий врач</label>
          <select v-model="doctors"
                  id="doctors"
                  name="doctors">
            <option disabled value="">Выберите один из вариантов</option>
            <option>Иванов</option>
            <option>Захаров</option>
            <option>Чернышева</option>
          </select>
          <span>Выбрано: {{ doctors }}</span>
        </div>

        <div class="form-item">
          <div>
            <input
                id="checkboxSms"
                v-model="checkboxSms"
                type="checkbox"
                name="checkboxSms"
            >
            <label for="checkboxSms">Не отправлять СМС.</label>
          </div>
        </div>

        <h3 class="title">Адрес:</h3>

        <div class="form-item address">
          <label for="postcode">Индекс</label>
          <input
              id="postcode"
              v-model="address.postcode"
              type="text"
              name="postcode"
          >
        </div>

        <div class="form-item address">
          <label for="country">Страна</label>
          <input
              id="country"
              v-model="address.country"
              type="text"
              name="country"
          >
        </div>

        <div class="form-item address">
          <label for="region">Область</label>
          <input
              id="region"
              v-model="address.region"
              type="text"
              name="region"
          >
        </div>

        <div class="form-item address">
          <label for="city">Город*</label>
          <input
              id="city"
              v-model="address.city"
              type="text"
              name="city"
          >
        </div>

        <div class="form-item address">
          <label for="street">Улица</label>
          <input
              id="street"
              v-model="address.street"
              type="text"
              name="street"
          >
        </div>

        <div class="form-item address">
          <label for="house">Дом</label>
          <input
              id="house"
              v-model="address.house"
              type="text"
              name="house"
          >
        </div>

        <h3>Паспорт:</h3>

        <div class="form-item docs">
          <label for="typeDoc">Тип документа*</label>
          <select v-model="documentClient.typeDoc"
                  id="typeDoc"
                  name="typeDoc">
            <option disabled value="">Выберите один из вариантов</option>
            <option>Паспорт</option>
            <option>Свидетельство о рождении</option>
            <option>Вод. удостоверение</option>
          </select>
          <span>Выбрано: {{ documentClient.typeDoc }}</span>
        </div>

        <div class="form-item docs">
          <label for="series">Серия</label>
          <input
              id="series"
              v-model="documentClient.seriesDoc"
              type="text"
              name="series"
          >
        </div>

        <div class="form-item docs">
          <label for="number">Номер</label>
          <input
              id="number"
              v-model="documentClient.numberDoc"
              type="text"
              name="number"
          >
        </div>

        <div class="form-item docs">
          <label for="authority">Кем выдан</label>
          <br>
          <textarea v-model="documentClient.authority"
                    id="authority"
                    placeholder="Кем выдан"></textarea>
        </div>

        <div class="form-item">
          <label for="dateOfIssue">Дата выдачи*</label>
          <input
              id="dateOfIssue"
              v-model="documentClient.dateOfIssue"
              type="date"
              name="dateOfIssue"
          >
        </div>

        <div class="form-item">
          <p>
            *Поле обязательное для заполнения.
          </p>
        </div>

        <button class="btn">
          Создать клиента
        </button>

      </fieldset>
    </form>


  </div>
</template>

<script>
export default {
  name: 'CreateClient',
  data: () => {
    return {
      surname: null,
      name: null,
      middleName: null,
      birthday: null,
      phoneNumber: null,
      gender: null,
      selectedTypeClient: [],
      typesClients: [
        { id: 1, text: 'VIP'},
        { id: 2, text: 'Проблемные'},
        { id: 3, text: 'ОМС'},
      ],
      doctors: '',
      checkboxSms: null,
      address: {
        postcode: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: ''
      },
      documentClient: {
        typeDoc: '',
        seriesDoc: '',
        numberDoc: '',
        authority: '',
        dateOfIssue: ''
      }
    }
  }
}
</script>

<style lang="sass">
@import '../assets/sass/main.sass'
</style>
