<style>
li {
  color: rgb(var(--color-muted-400));
}

.datalog {
  margin-top: 15%;
  margin-bottom: 12%;
}

.emerg {
  margin-top: 6%;
  margin-bottom: 6%;
}

.grw {
  margin-top: -2%;
  margin-bottom: 2%;
}

.marketing {
  margin-bottom: 2%;
}
</style>
<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider">Bash Pty</BaseText>
        <BaseHeading as="h4" size="2xl" weight="light" lead="normal" class="text-muted-800 mx-auto mb-4 dark:text-white">
          Tu aliado tecnológico y de crecimiento
        </BaseHeading>

        <BaseParagraph id="pa1" name="pa1" size="lg" class="text-muted-500 dark:text-muted-100 mx-auto mb-4">
          Ofrecemos una amplia gama de servicios para ayudarle a alcanzar sus
          objetivos tecnológicos.
        </BaseParagraph>
      </div>
      <div class="mb-10 grid gap-y-16 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-16" id="row-1">
        <div class="relative">
          <BaseCard rounded="lg" class="p-6" id="support" name="support">
            <BaseHeading as="h3" size="lg" weight="bold" lead="tight"
              class="text-muted-800 center mb-2 text-center align-middle dark:text-white">
              Soporte Técnico
              <TairoSupportLogo class="text-primary-500 h-100 w-100" />
            </BaseHeading>

            <BaseParagraph id="pa2" name="pa2" size="lg" lead="tight" class="text-muted-400">
              <BaseList>
                <BaseListItem title="Equipos"
                  subtitle="Mantenimiento preventivo. (Servidores, Torres, Laptops y redes computacionales)">
                  <Icon name="ph:monitor-bold" class="text-info-500 size-10" />
                </BaseListItem>
                <BaseListItem title="Cotización y compras"
                  subtitle="Gestionamos tus equipos e infraestructura tecnologica con los mejores proveedores del mercado.">
                  <Icon name="ph:currency-dollar-bold" class="text-success-500 size-10" />
                </BaseListItem>

                <BaseListItem title="Licenciamiento de Software" subtitle="Contamos con gran variedad de licencias ">
                  <Icon name="ph:credit-card-light" class="text-success-500 size-16" />
                </BaseListItem>
                <BaseList class="text-muted-400 ps-8" style="font-size: small">
                  <li>Office 365 indvidual y empresarial</li>
                  <li>Adobe Cloud</li>
                  <li>Autodesk (todos sus productos)</li>
                  <li>Sage 50</li>
                  <li>entre otras...</li>
                </BaseList>

                <BaseListItem title="Sistemas de seguridad"
                  subtitle="Centrales de Cámaras, Alarmas, sensores y sistemas de control acceso">
                  <Icon name="ph:lock-bold" class="text-danger-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Domitica e internet de las cosas"
                  subtitle="Domótica con Alexa, Google y otros agentes, instalaciones de interruptores, actuadores y más..">
                  <Icon name="ph:drop-half-bottom-duotone" class="text-success-500 size-16" />
                </BaseListItem>
              </BaseList>
            </BaseParagraph>
          </BaseCard>
        </div>
        <div class="relative">
          <BaseCard rounded="lg" class="p-6" id="admin" name="admin">
            <BaseHeading as="h3" size="lg" weight="bold" lead="tight"
              class="text-muted-800 center mb-2 text-center align-middle dark:text-white">
              Administración de Datos y Analítica
              <TairoDataLogo class="text-primary-500 h-100 w-100 datalog" />
            </BaseHeading>

            <BaseParagraph id="pa3" name="pa3" size="lg" lead="tight" class="text-muted-400">
              <BaseList>
                <BaseListItem title="Administración de Base de datos en nube y premisas"
                  subtitle="Experiencia con los gestores top del mercado">
                  <Icon name="ph:database-fill" class="text-info-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Base de datos Relacionales" class="text-muted-400 ps-6">
                </BaseListItem>
                <BaseList class="text-muted-400 ps-10" style="font-size: small">
                  <li>Oracle</li>
                  <li>Sql Server</li>
                  <li>MySql</li>
                  <li>Postgres</li>
                </BaseList>
                <BaseListItem title="Base de datos No Relacionales" class="text-muted-400 ps-6">
                </BaseListItem>
                <BaseList class="text-muted-400 ps-10" style="font-size: small">
                  <li>MongoDB</li>
                  <li>Amazon DynamoDB</li>
                  <li>Redis</li>
                </BaseList>
                <BaseListItem title="Integración y Automatización de datos"
                  subtitle="Implementaciones con Sql Server Integration Services,IBM InfoSphere DataStage, AWS Glue.">
                  <Icon name="ph:intersect-bold" class="text-danger-500 size-10" />
                </BaseListItem>

                <BaseListItem title="Análisis, Minería, Visualización de Datos"
                  subtitle="Implementación de metricas y dashboard customizados con Tableau, Metabase y Power BI">
                  <Icon name="ph:presentation-chart" class="size-6 text-yellow-400" />
                </BaseListItem>
              </BaseList>
            </BaseParagraph>
          </BaseCard>
        </div>
        <div class="relative">
          <BaseCard rounded="lg" class="p-6" id="develop" name="develop">
            <BaseHeading as="h3" size="lg" weight="bold" lead="tight"
              class="text-muted-800 center mb-2 text-center align-middle dark:text-white">
              Desarrollo de Software
              <TairoProgramingLogo class="text-primary-500 h-100 w-100" />
            </BaseHeading>

            <BaseParagraph id="pa4" name="pa4" size="sm" lead="tight" class="text-muted-400">
              <StackCarusel :slides-to-show="3" :slides="topics" />
              <BaseList>
                <BaseListItem title="Desarrollo de Software a medida"
                  subtitle="Implemnatmos software customizado en cualquier rugro comercial.">
                  <Icon name="ph:terminal-duotone" class="text-info-500 size-10" />
                </BaseListItem>
                <BaseListItem title="Software de marca blanca"
                  subtitle="Customizamos software libre con el branding o marca propia.">
                  <Icon name="ph:monitor-bold" class="text-info-500 size-10" />
                </BaseListItem>
                <BaseListItem title="Automatización, versionamiento y despliegue en nube"
                  subtitle="Creamos pipelines de integración y despliegue continuo que cumpla con todo los estandares actuales de la industria.">
                  <Icon name="ph:cloud-check-bold" class="text-info-500 size-10" />
                </BaseListItem>
                <BaseListItem title="Asesorías de Arquitectura de Software"
                  subtitle="Realizamos asesoria de cualquier tipo de proyecto de software o transformación digital en la empresa.">
                  <Icon name="ph:book-bookmark-bold" class="text-info-500 size-10" />
                </BaseListItem>
              </BaseList>
            </BaseParagraph>
          </BaseCard>
        </div>
      </div>
      <div class="mb-10 grid gap-y-16 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-16" id="row-2">
        <div class="relative">
          <BaseCard rounded="lg" class="p-6" id="techemr" name="techemr">
            <BaseHeading as="h3" size="lg" weight="bold" lead="tight"
              class="text-muted-800 center mb-2 text-center align-middle dark:text-white">
              Tecnologías Emergentes
              <TairoBlockChainLogo class="text-primary-500 h-100 w-100 emerg" />
            </BaseHeading>

            <BaseParagraph id="pa5" name="pa5" size="sm" lead="tight" class="text-muted-400">
              <BaseList>
                <BaseListItem title="Desarrollo de Proyectos Web3"
                  subtitle="Finanzas descentralizadas DeFi microcréditos, mineria de criptomonedas, Organizaciones autónomas descentralizadas (DAOs).">
                  <Icon name="ph:notification-bold" class="text-info-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Verifiación de identidad KYC tradicional o descentralizadas"
                  subtitle="Utilizamos la blockchain y contratos inteligentes para la verificación de identidad y Apis de terceros conectados al registro público de su país.">
                  <Icon name="ph:identification-badge-duotone" class="text-info-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Internet de las cosas Iot"
                  subtitle="Enlaza dispositivos inteligentes a con domótica y también a la blockchain.">
                  <Icon name="ph:currency-btc-bold" class="text-info-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Pasarelas de pago"
                  subtitle="Implementamos pasarales de pagos con tarjetas de créditos y criptomonedas a su necesidad.">
                  <Icon name="ph:credit-card-duotone" class="text-info-500 size-6" />
                </BaseListItem>
              </BaseList>
            </BaseParagraph>
          </BaseCard>
        </div>
        <div class="relative">
          <BaseCard rounded="lg" class="p-6" id="growth" name="growth">
            <BaseHeading as="h3" size="lg" weight="bold" lead="tight"
              class="text-muted-800 center mb-2 text-center align-middle dark:text-white">
              Socio de Crecimiento
              <img src="/img/contract.gif" class="h-100 w-100 grw" />
            </BaseHeading>

            <BaseParagraph id="pa6" name="pa6" size="sm" lead="tight" class="text-muted-400">
              <BaseList>
                <BaseListItem title="Montamos la infraestructura de tu proyecto"
                  subtitle="Te asesoramos y ayudamos a generar ventas de tus servicios o productos a cambio un porcentaje de estas.">
                  <Icon name="ph:notification-bold" class="text-info-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Capacitaciones y Seguimiento"
                  subtitle="Brindamos las bases de conocimiento al personal de las herramientas implementadas tecnológicamente.">
                  <Icon name="ph:notification-bold" class="text-info-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Actualizaciones regulares con la tecnología más actual"
                  subtitle="Soporte en todas la herramientas y aplicaciones instaladas.">
                  <Icon name="ph:notification-bold" class="text-info-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Estadistica de los proyectos"
                  subtitle="Implementamos una base estadistica para monitorear el rendimiento del proyecto.">
                  <Icon name="ph:notification-bold" class="text-info-500 size-6" />
                </BaseListItem>
              </BaseList>
            </BaseParagraph>
          </BaseCard>
        </div>
        <div class="relative">
          <BaseCard rounded="lg" class="p-6" id="marketing" name="marketing">
            <BaseHeading as="h3" size="lg" weight="bold" lead="tight"
              class="text-muted-800 center mb-2 text-center align-middle dark:text-white">
              Marketing Digital
              <TairoMarketingLogo class="text-primary-500 h-70 w-70 marketing" />
            </BaseHeading>

            <BaseParagraph id="pa7" name="pa7" size="sm" lead="tight" class="text-muted-400">
              <BaseList>
                <BaseListItem title="Montamos tus campañas de publicidad"
                  subtitle="Implementamos automatizaciones e integraciones de herramientas de terceros para mayor alcance optimizando costos.">
                  <Icon name="ph:megaphone-simple-bold" class="text-warning-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Embudos de ventas automatizados"
                  subtitle="Automatizamos un hub centralizado donde tus leads se concretan en ventas en cualquier medio.">
                  <Icon name="ph:sort-ascending-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Analítica Web, Optimización SEO y CRO"
                  subtitle="Te integramos herramientas y softwares especializados para las estadísticas de tus campañas publicitarias y optimización de búsqueda.">
                  <Icon name="ph:circle-wavy-check-bold" class="text-primary-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Campañas Masivas"
                  subtitle="Si requiere campañas especializadas tenemos socio para creación de contenido audiovisual, redes sociales, etc...">
                  <Icon name="ph:seal-warning-duotone" class="text-info-500 size-6" />
                </BaseListItem>
              </BaseList>
            </BaseParagraph>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const topics = [
  {
    icon: '/img/stacks/cplus.svg',
    title: 'Cplus',

  },
  {
    icon: '/img/stacks/csharp.svg',
    title: 'C-sharp',

  },
  {
    icon: '/img/stacks/java.svg',
    title: 'Java',

  },
  {
    icon: '/img/stacks/python.svg',
    title: 'Python',

  },
  {
    icon: '/img/stacks/github.svg',
    title: 'Github',

  },
  {
    icon: '/img/stacks/framework/azure.svg',
    title: 'Azure',

  },
  {
    icon: '/img/stacks/framework/aws.svg',
    title: 'AWS',

  },
  {
    icon: '/img/stacks/framework/docker.svg',
    title: 'Docker',

  },
  {
    icon: '/img/stacks/framework/k8s.svg',
    title: 'Kubernetes',

  },
  {
    icon: '/img/stacks/framework/terraform.svg',
    title: 'Terraform',

  },

  {
    icon: '/img/stacks/language/javascript.svg',
    title: 'Javascript',

  },
  {
    icon: '/img/stacks/language/typescript.svg',
    title: 'Typescript',

  },
  {
    icon: '/img/stacks/nodejs.svg',
    title: 'Nodejs',

  },
  {
    icon: '/img/stacks/nuxt.svg',
    title: 'Nuxt',

  },
  {
    icon: '/img/stacks/vuejs.svg',
    title: 'Vuejs',

  },
  {
    icon: '/img/stacks/html5.svg',
    title: 'Html',

  },
]
</script>
