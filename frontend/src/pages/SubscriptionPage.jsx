import logo from "@assets/logo.png";
import SubscriptionForm from "@components/SubscriptionForm";

function SubscriptionPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="flex flex-col items-center p-8 mt-0 mb-0 space-y-10 rounded-lg shadow-lg">
            <img src={logo} alt="Followz logo" />
            <article className="text-center text-sm sm:text-lg lg:text-xl">
              <p>
                En vous inscrivant sur Followz, vous pourrez ajouter et
                retrouver toutes les candidatures que vous avez faite. Faites
                les évoluer au fur et à mesure des réponses et gardez à jour
                votre avancement dans la recherche d'un job.
              </p>
              <p className="mt-4">
                N'attendez plus et cliquez vite sur le lien en dessous pour vous
                enregistrer et avoir accès à toutes nos fonctionnalités.
              </p>
            </article>
            <SubscriptionForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPage;
