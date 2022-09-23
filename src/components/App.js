import React, {useState, useEffect} from "react";
import Header from "./Header"
import "./App.css";

function App() {
  return (
 <div className="page">
  <Header/>
    <main className="content">
            <div className="popup popup_type_zoom">
          <div id="img-view" className="popup__container-img">
            <img className="popup__img" />
            <span
              className="popup__close popup__close_type_img-view"
              type="button"
              aria-label="button"
            ></span>
            <p className="popup__caption"></p>
          </div>
        </div>

        <div className="popup popup_type_profile">
          <div id="profile" className="popup__container">
            <button
              type="button"
              aria-label="button"
              className="popup__close popup__close_type_profile"
            ></button>
            <h3 className="popup__title">Edit Profile</h3>
            <form
              novalidate
              name="formProfile"
              className="form form_type_profile"
              id="form__profile"
            >
              <fieldset className="fieldset">
                <div className="fieldset__container">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value="Jacques Cousteau"
                    className="fieldset__input fieldset__input_type_name"
                    minlength="2"
                    maxlength="40"
                    required
                  />
                  <span
                    className="fieldset__error-message fieldset__error-type-name"
                  ></span>
                </div>
                <div className="fieldset__container">
                  <input
                    type="text"
                    id="about"
                    name="about"
                    placeholder="about"
                    value="Explorer"
                    className="fieldset__input fieldset__input_type_about"
                    minlength="2"
                    maxlength="200"
                    required
                  />
                  <span
                    className="fieldset__error-message fieldset__error-type-about"
                  ></span>
                </div>
              </fieldset>

              <fieldset className="fieldset">
                <button
                  name="save"
                  type="submit"
                  class="fieldset__button fieldset__button-type-save"
                  disabled
                >
                  Save
                </button>
              </fieldset>
            </form>
          </div>
        </div>

        <div className="popup popup_type_card">
          <div id="img-add" class="popup__container">
            <button
              type="button"
              aria-label="button"
              className="popup__close popup__close_type-img-add"
            ></button>
            <h3 className="popup__title">New place</h3>
            <form
              novalidate
              name="formImg"
              className="form form_type_img-add"
              id="form__img"
            >
              <fieldset className="fieldset">
                <div className="fieldset__container">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value=""
                    placeholder="Title"
                    className="fieldset__input fieldset__input_type-title"
                    minlength="1"
                    maxlength="30"
                    required
                  />
                  <span
                    className="fieldset__error-message fieldset__error-type-title"
                  ></span>
                </div>

                <div className="fieldset__container">
                  <input
                    type="link"
                    id="link"
                    name="link"
                    value=""
                    placeholder="Link"
                    className="fieldset__input fieldset__input_type_link"
                    required
                  />
                  <span
                    className="fieldset__error-message fieldset__error-type-link"
                  ></span>
                </div>
              </fieldset>

              <fieldset className="fieldset">
                <button
                  name="create"
                  type="submit"
                  className="fieldset__button fieldset__button_type_create fieldset__button_disabled"
                  disabled
                >
                  Create
                </button>
              </fieldset>
            </form>
          </div>
        </div>

        <div className="popup popup__type_delete">
          <div id="card-delete" class="popup__container">
            <button
              type="button"
              aria-label="button"
              className="popup__close popup__close_type_delete"
            ></button>
            <h3 className="popup__title">Are you sure?</h3>
            <form
              novalidate
              name="formDelete"
              className="form form_type_delete"
              id="form__delete"
            >
              <fieldset className="fieldset">
                <button
                  name="delete"
                  type="submit"
                  className="fieldset__button fieldset__button_type_delete"
                >
                  Delete
                </button>
              </fieldset>
            </form>
          </div>
        </div>

        <div className="popup popup__type_avatar">
          <div id="change-avatar" className="popup__container">
            <button
              type="button"
              aria-label="button"
              className="popup__close popup__close_type_avatar"
            ></button>
            <h3 className="popup__title">Change profile picture</h3>
            <form
              novalidate
              name="formAvatar"
              className="form form_type-avatar"
              id="form__avatar"
            >
              <fieldset class="fieldset">
                <div class="fieldset__container">
                  <input
                    type="url"
                    id="url"
                    name="link"
                    value=""
                    placeholder="picture"
                    class="fieldset__input fieldset__input_type-link"
                    required
                  />
                  <span
                    class="fieldset__error-message fieldset__error-type-link"
                  ></span>
                </div>
              </fieldset>

              <fieldset class="fieldset">
                <button
                  name="create"
                  type="submit"
                  class="fieldset__button fieldset__button_type_create"
                >
                  Create
                </button>
              </fieldset>
            </form>
          </div>
        </div>


  
    </div>
 

       
        <section class="top">
          <div class="top__container">
            <img
              src="<%=require('./images/header__img.png')%>"
              alt="Profile picture"
              class="top__img"
            />
          </div>

          <div class="text">
            <div class="text__title">
              <h1 class="text__name">Jacques Cousteau</h1>
              <button
                type="button"
                aria-label="button"
                class="text__edit"
              ></button>
            </div>
            <p class="text__about">Explorer</p>
          </div>
          <!---->
          <button
            type="button"
            aria-label="button"
            class="top__plus-box"
          ></button>
        </section>

        <section class="images">
          <ul class="gallery"></ul>
        </section>
      </main>
      <footer class="footer">
  <p class="footer__text">© 2021 Around The U.S.</p>
</footer>;

    <template id="gallery__item">
      <li class="gallery__item">
        <img src=" " alt=" " class="gallery__img" />
        <span class="gallery__bin"></span>
        <div class="desc">
          <h2 class="desc__text"></h2>
          <div class="like">
            <button
              type="button"
              aria-label="button"
              id="like__button"
              class="like__button"
            ></button>
            <div class="like__counter"></div>
          </div>
        </div>
      </li>
    </template>
  );
}

export default App;
