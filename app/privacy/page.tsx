"use client"
import MaxWidthWrapper from '../../components/max-width-wrapper';
import AnimationContainer from '../../components/animation-container';

const Privacy = () => {
  return (
    <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
    <AnimationContainer delay={0.1} className="w-full">
      <h1 className="text-4xl md:text-6xl font-heading font-bold text-center w-full">
        Política de Privacidad
      </h1>
      <p className="text-sm mb-2 italic mt-20">
        Última actualización: 17 de junio de 2024
      </p>
      <p className="mt-4">
        En <strong>Linkify</strong>, estamos comprometidos a proteger su
        privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos
        y salvaguardamos su información cuando utiliza nuestro sitio web y servicios.
      </p>
  
      <h2 className="text-xl font-medium mt-8">Información que Recopilamos</h2>
  
      <h3 className="text-lg mt-4">Información Personal</h3>
      <p className="mt-8 text-muted-foreground">
        Cuando se registra para obtener una cuenta o utiliza nuestros servicios, podemos recopilar
        información personal que puede identificarlo, como su nombre, dirección de correo
        electrónico e información de pago.
      </p>
  
      <h3 className="text-lg font-medium mt-12">Información No Personal</h3>
      <p className="mt-8 text-muted-foreground">
        También podemos recopilar información no personal sobre su uso del
        servicio, como direcciones IP, tipos de navegador, URLs de referencia y
        otros datos técnicos.
      </p>
  
      <h3 className="text-lg font-medium mt-8">
        Cookies y Tecnologías de Seguimiento
      </h3>
      <p className="mt-8">
        Utilizamos cookies y tecnologías de seguimiento similares para recopilar y almacenar
        información sobre sus interacciones con nuestro sitio web. Puede gestionar
        sus preferencias de cookies a través de la configuración de su navegador.
      </p>
  
      <h2 className="text-xl font-medium mt-12">
        Cómo Usamos Su Información
      </h2>
  
      <h3 className="text-lg mt-8">Proveer y Mejorar Servicios</h3>
      <div className="mt-8">
        Utilizamos la información que recopilamos para:
        <ul className="list-disc ml-8 text-muted-foreground">
          <li>Proveer, operar y mantener nuestros servicios.</li>
          <li>Mejorar y personalizar su experiencia.</li>
          <li>Procesar transacciones y gestionar su cuenta.</li>
        </ul>
      </div>
  
      <h3 className="text-xl font-medium mt-12">Comunicación</h3>
      <div className="mt-8">
        Podemos usar su información para:
        <ul className="list-disc text-muted-foreground ml-8">
          <li>
            Enviarle actualizaciones, materiales promocionales y otra información
            relacionada con nuestros servicios.
          </li>
          <li>Responder a sus consultas y proporcionar soporte al cliente.</li>
        </ul>
      </div>
  
      <h3 className="text-lg mt-8">Análisis e Investigación</h3>
      <div className="mt-8">
        Utilizamos información no personal con fines analíticos, como:
        <ul className="list-disc text-muted-foreground ml-8">
          <li>Monitorear y analizar tendencias y preferencias de uso.</li>
          <li>Realizar investigaciones y mejorar nuestros servicios.</li>
        </ul>
      </div>
  
      <h2 className="text-xl font-medium mt-12">
        Cómo Compartimos Su Información
      </h2>
  
      <h3 className="text-lg mt-8">Proveedores de Servicios</h3>
      <p className="mt-8 text-muted-foreground">
        Podemos compartir su información con proveedores de servicios de terceros que
        nos asisten en la operación de nuestros servicios, como procesadores de pagos, servicios de correo
        electrónico y proveedores de alojamiento.
      </p>
  
      <h3 className="text-lg mt-8">Requisitos Legales</h3>
      <p className="mt-8 text-muted-foreground">
        Podemos divulgar su información si se requiere hacerlo por ley o en
        respuesta a solicitudes válidas de autoridades públicas.
      </p>
  
      <h3 className="text-lg mt-8">Transferencias Comerciales</h3>
      <p className="mt-8 text-muted-foreground">
        En caso de una fusión, adquisición o venta de todos o parte de
        nuestros activos, su información puede ser transferida a la entidad adquirente.
      </p>
  
      <h2 className="text-xl font-medium mt-12">Seguridad de los Datos</h2>
      <p className="mt-8 text-muted-foreground">
        Implementamos medidas técnicas y organizativas adecuadas para
        proteger su información personal contra el acceso no autorizado, pérdida
        o alteración. Sin embargo, ningún método de transmisión a través de internet o
        método de almacenamiento electrónico es 100% seguro.
      </p>
  
      <h2 className="text-xl font-medium mt-12">Retención de Datos</h2>
      <p className="mt-8 text-muted-foreground">
        Retenemos su información personal durante el tiempo necesario para cumplir
        con los propósitos para los cuales fue recopilada, cumplir con nuestras obligaciones legales,
        resolver disputas y hacer cumplir nuestros acuerdos.
      </p>
  
      <h2 className="text-xl font-medium mt-12">Sus Derechos y Opciones</h2>
  
      <h3 className="text-lg mt-8">Acceso y Actualización</h3>
      <p className="mt-8 text-muted-foreground">
        Tiene el derecho de acceder y actualizar su información personal. Puede
        hacerlo iniciando sesión en su cuenta y actualizando la configuración de su perfil.
      </p>
  
      <h3 className="text-lg mt-8">Opción de Exclusión</h3>
      <p className="mt-8 text-muted-foreground">
        Puede optar por no recibir correos electrónicos promocionales de nuestra parte siguiendo
        las instrucciones de cancelación de suscripción en esos correos. También puede contactarnos
        directamente para optar por no participar.
      </p>
  
      <h3 className="text-lg mt-8">Eliminación de Datos</h3>
      <p className="mt-8 text-muted-foreground">
        Tiene el derecho de solicitar la eliminación de su información personal. 
        Por favor, contáctenos en support@linkify.com para hacer esta
        solicitud.
      </p>
  
      <h2 className="text-xl font-medium mt-12">Privacidad de los Niños</h2>
      <p className="mt-8 text-muted-foreground">
        Nuestros servicios no están dirigidos a individuos menores de 18 años. No
        recopilamos intencionalmente información personal de niños menores de 18.
        Si nos damos cuenta de que hemos recopilado información personal de un
        niño menor de 18, tomaremos medidas para eliminar dicha información.
      </p>
  
      <h2 className="text-xl font-medium mt-12">
        Transferencias Internacionales de Datos
      </h2>
      <p className="mt-8 text-muted-foreground">
        Su información puede ser transferida y procesada en países
        distintos al suyo. Nos aseguraremos de que existan salvaguardias adecuadas para
        proteger su información personal cuando se transfiera
        a través de fronteras.
      </p>
  
      <h2 className="text-xl font-medium mt-12">
        Cambios a Esta Política de Privacidad
      </h2>
      <p className="mt-8 text-muted-foreground">
        Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos
        sobre cualquier cambio publicando la nueva Política de Privacidad en nuestro sitio web
        y actualizando la fecha de Última actualización en la parte superior de esta
        página.
      </p>
  
      <h2 className="text-xl font-medium mt-12">Contáctenos</h2>
      <p className="mt-8 text-muted-foreground">
        Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad,
        por favor contáctenos en support@linkify.io.
      </p>
  
      <p className="mt-8 font-medium">
        Al utilizar Linkify, usted reconoce que ha leído, entendido y
        acepta los términos de esta Política de Privacidad.
      </p>
    </AnimationContainer>
  </MaxWidthWrapper>
  );
};

export default Privacy;
