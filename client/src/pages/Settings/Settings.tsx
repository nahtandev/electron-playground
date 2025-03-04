import { useState } from "react";
import "./Settings.scss";

interface UserProfile {
  name: string;
  email: string;
  role: string;
  notifications: boolean;
  language: string;
  theme: "light" | "dark" | "system";
}

interface CompanySettings {
  companyName: string;
  address: string;
  phone: string;
  vatNumber: string;
  currency: string;
  timezone: string;
}

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrateur",
    notifications: true,
    language: "fr",
    theme: "system"
  });

  const [companySettings, setCompanySettings] = useState<CompanySettings>({
    companyName: "Ma Société",
    address: "123 Rue de la Paix, 75000 Paris",
    phone: "01 23 45 67 89",
    vatNumber: "FR 12 345 678 901",
    currency: "EUR",
    timezone: "Europe/Paris"
  });

  const handleProfileUpdate = (field: keyof UserProfile, value: any) => {
    setUserProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleCompanyUpdate = (field: keyof CompanySettings, value: string) => {
    setCompanySettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="settings">
      <div className="settings__header">
        <h1 className="settings__title">Paramètres</h1>
      </div>

      <div className="settings__content">
        <div className="settings__tabs">
          <button
            className={`settings__tab ${activeTab === "profile" ? "settings__tab--active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            👤 Profil
          </button>
          <button
            className={`settings__tab ${activeTab === "company" ? "settings__tab--active" : ""}`}
            onClick={() => setActiveTab("company")}
          >
            🏢 Entreprise
          </button>
          <button
            className={`settings__tab ${activeTab === "security" ? "settings__tab--active" : ""}`}
            onClick={() => setActiveTab("security")}
          >
            🔒 Sécurité
          </button>
          <button
            className={`settings__tab ${activeTab === "notifications" ? "settings__tab--active" : ""}`}
            onClick={() => setActiveTab("notifications")}
          >
            🔔 Notifications
          </button>
        </div>

        <div className="settings__panel">
          {activeTab === "profile" && (
            <div className="settings__section">
              <h2 className="settings__section-title">Profil Utilisateur</h2>
              
              <div className="settings__form">
                <div className="settings__form-group">
                  <label>Nom complet</label>
                  <input
                    type="text"
                    value={userProfile.name}
                    onChange={(e) => handleProfileUpdate("name", e.target.value)}
                  />
                </div>

                <div className="settings__form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={userProfile.email}
                    onChange={(e) => handleProfileUpdate("email", e.target.value)}
                  />
                </div>

                <div className="settings__form-group">
                  <label>Langue</label>
                  <select
                    value={userProfile.language}
                    onChange={(e) => handleProfileUpdate("language", e.target.value)}
                  >
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                  </select>
                </div>

                <div className="settings__form-group">
                  <label>Thème</label>
                  <select
                    value={userProfile.theme}
                    onChange={(e) => handleProfileUpdate("theme", e.target.value as "light" | "dark" | "system")}
                  >
                    <option value="light">Clair</option>
                    <option value="dark">Sombre</option>
                    <option value="system">Système</option>
                  </select>
                </div>

                <div className="settings__form-group">
                  <label className="settings__checkbox-label">
                    <input
                      type="checkbox"
                      checked={userProfile.notifications}
                      onChange={(e) => handleProfileUpdate("notifications", e.target.checked)}
                    />
                    Activer les notifications
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === "company" && (
            <div className="settings__section">
              <h2 className="settings__section-title">Informations de l'entreprise</h2>
              
              <div className="settings__form">
                <div className="settings__form-group">
                  <label>Nom de l'entreprise</label>
                  <input
                    type="text"
                    value={companySettings.companyName}
                    onChange={(e) => handleCompanyUpdate("companyName", e.target.value)}
                  />
                </div>

                <div className="settings__form-group">
                  <label>Adresse</label>
                  <textarea
                    value={companySettings.address}
                    onChange={(e) => handleCompanyUpdate("address", e.target.value)}
                  />
                </div>

                <div className="settings__form-group">
                  <label>Téléphone</label>
                  <input
                    type="tel"
                    value={companySettings.phone}
                    onChange={(e) => handleCompanyUpdate("phone", e.target.value)}
                  />
                </div>

                <div className="settings__form-group">
                  <label>Numéro de TVA</label>
                  <input
                    type="text"
                    value={companySettings.vatNumber}
                    onChange={(e) => handleCompanyUpdate("vatNumber", e.target.value)}
                  />
                </div>

                <div className="settings__form-group">
                  <label>Devise</label>
                  <select
                    value={companySettings.currency}
                    onChange={(e) => handleCompanyUpdate("currency", e.target.value)}
                  >
                    <option value="EUR">Euro (€)</option>
                    <option value="USD">Dollar ($)</option>
                    <option value="GBP">Livre Sterling (£)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="settings__section">
              <h2 className="settings__section-title">Sécurité</h2>
              
              <div className="settings__form">
                <div className="settings__form-group">
                  <button className="settings__button settings__button--primary">
                    🔄 Changer le mot de passe
                  </button>
                </div>

                <div className="settings__form-group">
                  <button className="settings__button settings__button--secondary">
                    📱 Activer l'authentification à deux facteurs
                  </button>
                </div>

                <div className="settings__form-group">
                  <button className="settings__button settings__button--danger">
                    🗑️ Supprimer le compte
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="settings__section">
              <h2 className="settings__section-title">Préférences de notifications</h2>
              
              <div className="settings__form">
                <div className="settings__form-group">
                  <label className="settings__checkbox-label">
                    <input type="checkbox" defaultChecked />
                    Nouvelles commandes
                  </label>
                </div>

                <div className="settings__form-group">
                  <label className="settings__checkbox-label">
                    <input type="checkbox" defaultChecked />
                    Messages des clients
                  </label>
                </div>

                <div className="settings__form-group">
                  <label className="settings__checkbox-label">
                    <input type="checkbox" defaultChecked />
                    Mises à jour du système
                  </label>
                </div>

                <div className="settings__form-group">
                  <label className="settings__checkbox-label">
                    <input type="checkbox" />
                    Newsletters et promotions
                  </label>
                </div>
              </div>
            </div>
          )}

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
    </div>
  );
};

export default Settings;
