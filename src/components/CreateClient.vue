<template>
  <div class="container">
    <form class="form-wrapper" @submit.prevent="onsubmit">
      <fieldset>
        <legend> Форма создания Клиента</legend>
        <div class="form-item" :class="{ errorInput: $v.surname.$error }">
          <label for="surname">Фамилия*</label>
          <p class="errorText" v-if="!$v.surname.required ">
            Поле обязательное для заполнения
          </p>
          <input
              id="surname"
              v-model="surname"
              :class="{ error: $v.surname.$error }"
              @change="$v.surname.$touch()"
              type="text"
              name="surname"
          >
        </div>

        <div class="form-item" :class="{ errorInput: $v.name.$error }">
          <label for="name">Имя*</label>
          <p class="errorText" v-if="!$v.name.required">
            Поле обязательное для заполнения
          </p>
          <input
              id="name"
              v-model="name"
              :class="{ error: $v.name.$error }"
              @change="$v.name.$touch()"
              type="text"
              name="name"
          >
        </div>

        <div class="form-item">
          <label for="middleName">Отчество</label>
          <input
              id="middleName"
              v-model="middleName"
              type="text"
              name="middleName"
          >
        </div>

        <div class="form-item" :class="{ errorInput: $v.birthday.$error }">
          <label for="birthday">Дата рождения*</label>
          <p class="errorText" v-if="!$v.birthday.required">
            Поле обязательное для заполнения
          </p>
          <input
              id="birthday"
              v-model="birthday"
              :class="{ error: $v.birthday.$error }"
              @change="$v.birthday.$touch()"
              type="date"
              name="birthday"
          >
        </div>

        <div class="form-item" :class="{ errorInput: $v.phoneNumber.$error }">
          <label for="phoneNumber">Номер телефона*</label>
          <p class="errorText" v-if="!$v.phoneNumber.required">
            Поле обязательное для заполнения
          </p>
          <input
              id="phoneNumber"
              v-model="phoneNumber"
              :class="{ error: $v.phoneNumber.$error }"
              @change="$v.phoneNumber.$touch()"
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

        <div class="form-item" :class="{ errorInput: $v.selectedTypeClient.$error }">
          <label for="typesClients">Группа клиентов*</label>
          <p class="errorText" v-if="!$v.selectedTypeClient.required">
            Поле обязательное для заполнения
          </p>
          <select v-model="selectedTypeClient"
                  :class="{ error: $v.selectedTypeClient.$error }"
                  @change="$v.selectedTypeClient.$touch()"
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

        <div class="form-item address" :class="{ errorInput: $v.address.city.$error }">
          <label for="city">Город*</label>
          <p class="errorText" v-if="!$v.address.city.required ">
            Поле обязательное для заполнения
          </p>
          <input
              id="city"
              v-model="address.city"
              :class="{ error: $v.address.city.$error }"
              @change="$v.address.city.$touch()"
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

        <div class="form-item docs" :class="{ errorInput: $v.documentClient.typeDoc.$error }">
          <label for="typeDoc">Тип документа*</label>
          <p class="errorText" v-if="!$v.documentClient.typeDoc.required ">
            Поле обязательное для заполнения
          </p>
          <select v-model="documentClient.typeDoc"
                  :class="{ error: $v.documentClient.typeDoc.$error }"
                  @change="$v.documentClient.typeDoc.$touch()"
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

        <div class="form-item" :class="{ errorInput: $v.documentClient.dateOfIssue.$error }">
          <label for="dateOfIssue">Дата выдачи*</label>
          <p class="errorText" v-if="!$v.documentClient.dateOfIssue.required ">
            Поле обязательное для заполнения
          </p>
          <input
              id="dateOfIssue"
              v-model="documentClient.dateOfIssue"
              :class="{ error: $v.documentClient.dateOfIssue.$error }"
              @change="$v.documentClient.dateOfIssue.$touch()"
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
import { required } from 'vuelidate/lib/validators'


const isPhone = (value) => /^((7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{11}$/.test(value)
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
        {id: 1, text: 'VIP'},
        {id: 2, text: 'Проблемные'},
        {id: 3, text: 'ОМС'},
      ],
      doctors: null,
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
  },
  validations: {
    surname: {
      required,
    },
    name: {
      required,
    },
    birthday: {
      required,
    },
    phoneNumber: {
      required,
      phoneValid: isPhone
    },
    selectedTypeClient: {
      required,
    },
    address: {
      city: {
        required,
      },
    },
    documentClient: {
      typeDoc: {
        required,
      },
      dateOfIssue: {
        required,
      }
    }
  },
  methods: {
    onsubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const user = {
          surname: this.surname,
          name: this.name,
          middleName: this.middleName,
          birthday: this.birthday,
          phoneNumber: this.phoneNumber,
          gender: this.gender,
          selectedTypeClient: this.selectedTypeClient,
          doctor: this.doctor,
          checkboxSms: this.checkboxSms,
          address: {
            postcode: this.address.postcode,
            country: this.address.country,
            region: this.address.region,
            city: this.address.city,
            street: this.address.street,
            house: this.address.house
          },
          documentClient: {
            typeDoc: this.documentClient.typeDoc,
            seriesDoc: this.documentClient.seriesDoc,
            numberDoc: this.documentClient.numberDoc,
            authority: this.documentClient.authority,
            dateOfIssue: this.documentClient.dateOfIssue
          }
        }
        console.log(user)

        alert("Клиент создан")

        this.surname = null,
        this.name = null,
        this.middleName = null,
        this.birthday = null,
        this.phoneNumber = null,
        this.gender = null,
        this.selectedTypeClient = [],


        this.checkboxSms = null,
        this.address = {
          postcode: '',
          country: '',
          region: '',
          city: '',
          street: '',
          house: ''
        }

        this.documentClient = {
          typeDoc: '',
          seriesDoc: '',
          numberDoc: '',
          authority: '',
          dateOfIssue: ''
        }
      }
    }

  }
}
</script>

<style lang="sass">
@import '../assets/sass/main.sass'

.form-item .errorText
  display: none
  margin-bottom: 8px
  font-size: 13.4px
  color: #de4040

.form-item
  &.errorInput .errorText
    display: block

input.error
  border-color: #de4040
</style>
