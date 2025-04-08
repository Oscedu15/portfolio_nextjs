"use client";
import MaxWidthWrapper from "../../components/max-width-wrapper";
import AnimationContainer from "../../components/animation-container";
import Link from "next/link";

const TermsPage = () => {
  return (
<MaxWidthWrapper className="max-w-full mx-auto px-8 pb-10 bg-gradient-to-r dark:from-primary/10 dark:to-tertiary/10 from-slate-50 to-gray-300">
  <AnimationContainer delay={0.1} className="w-full ">
    <h2 className="text-4xl md:text-6x lpt-24 lg:pt-32 font-heading font-bold text-center w-full">
      Términos y Condiciones.
    </h2>
    <p className="text-sm mb-2 italic mt-10 lg:mt-20">
      Última actualización: 01 de Abril de 2025.
    </p>
    <p className="mt-4">
      Bienvenido a Oscedu. Estos términos y condiciones describen las reglas y
      regulaciones para el uso del sitio web y los servicios de Oscedu.
    </p>

    <h2 className="text-xl font-medium mt-8">Aceptación de los Términos</h2>

    <p className="mt-8 text-muted-foreground">
      Al acceder y utilizar Oscedu, acepta y se compromete a cumplir con
      estos términos y condiciones. Si no está de acuerdo con estos términos, no
      puede utilizar nuestro sitio web ni nuestros servicios.
    </p>

    <h2 className="text-xl font-medium mt-12">Cambios en los Términos</h2>
    <p className="mt-8 text-muted-foreground">
      Oscedu se reserva el derecho de modificar estos términos en cualquier
      momento. Le notificaremos sobre cualquier cambio actualizando la fecha de
      Última actualización en la parte superior de esta página. Su uso
      continuado de nuestro sitio web y servicios después de cualquier
      modificación indica su aceptación de los nuevos términos.
    </p>

    <h2 className="text-xl font-medium mt-12">Uso de los Servicios</h2>

    <h3 className="text-lg mt-8">Elegibilidad</h3>
    <p className="mt-8">
      Para utilizar Oscedu, debe tener al menos 18 años y ser capaz de
      celebrar un contrato vinculante.
    </p>

    <h3 className="text-lg mt-8">Registro de Cuenta</h3>
    <div className="mt-8">
      <ul className="list-disc ml-8 text-muted-foreground">
        <li>
          Debe proporcionar información precisa y completa durante el
          proceso de registro.
        </li>
        <li>
          Es responsable de mantener la confidencialidad de la información de
          su cuenta y de todas las actividades que ocurran bajo su cuenta.
        </li>
        <li>
          Acepta notificarnos de inmediato sobre cualquier uso no autorizado
          de su cuenta.
        </li>
      </ul>
    </div>

    <h3 className="text-lg mt-8">Uso Aceptable</h3>
    <div className="mt-8">
      Acepta no utilizar Oscedu para actividades ilegales o prohibidas,
      incluyendo, entre otras:
      <ul className="list-disc text-muted-foreground ml-8">
        <li>
          Subir o compartir contenido que sea ofensivo, dañino o que
          viole alguna ley.
        </li>
        <li>Utilizar el servicio para distribuir spam o contenido malicioso.</li>
        <li>
          Intentar obtener acceso no autorizado a otras cuentas de usuario o
          a los sistemas de Oscedu.
        </li>
      </ul>
    </div>

    <h2 className="text-xl font-medium mt-12">
      Acortamiento y Gestión de Enlaces
    </h2>

    <h3 className="text-lg mt-8">Acortamiento de URL</h3>
    <p className="mt-8 text-muted-foreground">
      Oscedu proporciona un servicio de acortamiento de URL que le permite
      crear enlaces cortos a partir de URLs largas. Acepta no utilizar este
      servicio para crear enlaces a contenido ilegal o dañino.
    </p>

    <h3 className="text-lg mt-8">Analítica</h3>
    <p className="mt-8 text-muted-foreground">
      Oscedu ofrece analíticas para sus URLs acortadas. Acepta utilizar
      estos datos de manera responsable y cumplir con todas las leyes de
      privacidad aplicables.
    </p>

    <h3 className="text-lg mt-8">Generación de Códigos QR</h3>
    <p className="mt-8 text-muted-foreground">
      Puede generar códigos QR para sus URLs acortadas. Acepta no utilizar
      los códigos QR para ningún propósito malicioso.
    </p>

    <h3 className="text-lg mt-8">Transferencias Comerciales</h3>
    <p className="mt-8 text-muted-foreground">
      En caso de una fusión, adquisición o venta de todos o parte de
      nuestros activos, su información puede ser transferida a la entidad
      adquirente.
    </p>

    <h2 className="text-xl font-medium mt-12">Contenido del Usuario</h2>

    <h3 className="text-lg mt-8">Propiedad</h3>

    <p className="mt-8 text-muted-foreground">
      Usted conserva la propiedad de cualquier contenido que suba o cree
      utilizando Oscedu. Sin embargo, al subir o crear contenido, otorga a
      Oscedu una licencia mundial, no exclusiva y libre de regalías para
      usar, reproducir y mostrar su contenido según sea necesario para
      proporcionar nuestros servicios.
    </p>

    <h2 className="text-xl font-medium mt-12">Responsabilidad</h2>
    <p className="mt-8 text-muted-foreground">
      Usted es el único responsable del contenido que suba o cree.
      Oscedu no respalda ni asume ninguna responsabilidad por el contenido
      del usuario.
    </p>

    <h2 className="text-xl font-medium mt-12">Privacidad</h2>

    <p className="mt-8 text-muted-foreground">
      Su privacidad es importante para nosotros. Por favor, revise nuestra{" "}
      <Link href="/privacy" className="underline">
        Política de Privacidad
      </Link>{" "}
      para entender cómo recopilamos, usamos y protegemos su información.
    </p>

    <h2 className="text-xl font-medium mt-12">Terminación</h2>
    <p className="mt-8 text-muted-foreground">
      Oscedu se reserva el derecho de suspender o terminar su cuenta en
      cualquier momento, con o sin previo aviso, por cualquier motivo,
      incluyendo, entre otros, la violación de estos términos.
    </p>

    <h2 className="text-xl font-medium mt-12">
      Renuncias y Limitaciones de Responsabilidad
    </h2>

    <h3 className="text-lg mt-8">Sin Garantías</h3>
    <p className="mt-8 text-muted-foreground">
      Oscedu se proporciona tal cual y según disponibilidad. No
      garantizamos que el servicio será ininterrumpido, libre de errores o
      libre de virus u otros componentes dañinos.
    </p>

    <h3 className="text-lg mt-8">Limitación de Responsabilidad</h3>
    <p className="mt-8 text-muted-foreground">
      En ningún caso Oscedu será responsable de daños indirectos, incidentales,
      especiales o consecuentes que surjan de o en conexión con su uso del
      servicio.
    </p>

    <h2 className="text-xl font-medium mt-12">Ley Aplicable</h2>
    <p className="mt-8 text-muted-foreground">
      Estos términos se regirán e interpretarán de acuerdo con las leyes de
      Venezuela o Argentina, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
    </p>

    <h2 className="text-xl font-medium mt-12">Contáctenos</h2>
    <p className="mt-8 text-muted-foreground">
      Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad,
      por favor contáctenos en oscaregarcialeon@gmail.com.
    </p>

    <p className="mt-8 font-medium">
      Al utilizar Oscedu, usted reconoce que ha leído, entendido y
      acepta estar sujeto a estos términos y condiciones.
    </p>
  </AnimationContainer>
</MaxWidthWrapper>
  );
};

export default TermsPage;
