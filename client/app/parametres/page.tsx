import './style.scss';

export default function ParametresPage() {
  return (
    <div className="settings">
      <header className="settings__header">
        <h1 className="settings__title">Paramètres</h1>
      </header>

      <div className="settings__content">
        <div className="settings__section">
          <h2 className="settings__section-title">Profil</h2>
          <div className="settings__form">
            <div className="settings__form-group">
              <label className="settings__label">Photo de profil</label>
              <div className="settings__avatar-upload">
                <div className="settings__avatar">
                  <span className="settings__avatar-text">JD</span>
                </div>
                <button className="settings__upload-button">
                  Changer la photo
                </button>
              </div>
            </div>

            <div className="settings__form-group">
              <label className="settings__label" htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                className="settings__input"
                defaultValue="John Doe"
              />
            </div>

            <div className="settings__form-group">
              <label className="settings__label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="settings__input"
                defaultValue="john@example.com"
              />
            </div>
          </div>
        </div>

        <div className="settings__section">
          <h2 className="settings__section-title">Notifications</h2>
          <div className="settings__options">
            <div className="settings__option">
              <div className="settings__option-info">
                <h3 className="settings__option-title">Notifications par email</h3>
                <p className="settings__option-description">
                  Recevoir des notifications par email pour les nouvelles commandes
                </p>
              </div>
              <label className="settings__switch">
                <input type="checkbox" defaultChecked />
                <span className="settings__switch-slider"></span>
              </label>
            </div>

            <div className="settings__option">
              <div className="settings__option-info">
                <h3 className="settings__option-title">Notifications push</h3>
                <p className="settings__option-description">
                  Recevoir des notifications push pour les mises à jour importantes
                </p>
              </div>
              <label className="settings__switch">
                <input type="checkbox" />
                <span className="settings__switch-slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="settings__section">
          <h2 className="settings__section-title">Sécurité</h2>
          <div className="settings__form">
            <div className="settings__form-group">
              <label className="settings__label" htmlFor="current-password">
                Mot de passe actuel
              </label>
              <input
                type="password"
                id="current-password"
                className="settings__input"
              />
            </div>

            <div className="settings__form-group">
              <label className="settings__label" htmlFor="new-password">
                Nouveau mot de passe
              </label>
              <input
                type="password"
                id="new-password"
                className="settings__input"
              />
            </div>

            <div className="settings__form-group">
              <label className="settings__label" htmlFor="confirm-password">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirm-password"
                className="settings__input"
              />
            </div>
          </div>
        </div>

        <div className="settings__actions">
          <button className="settings__button settings__button--primary">
            Enregistrer les modifications
          </button>
          <button className="settings__button settings__button--secondary">
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
