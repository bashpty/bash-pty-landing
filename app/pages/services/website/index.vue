<script setup lang="ts">
definePageMeta({
  title: 'Tu mejor elección tecnológica 🖥️',
  layout: 'landing',
  preview: {
    title: 'Bash Pty',
    description: 'Tu mejor elección tecnológica 🖥️',
    order: 2,
  },
})
</script>
<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-2">
      <div class="mb-10 max-w-2xl">
        <BaseHeading as="h4" size="2xl" weight="light" lead="normal"
          class="text-muted-800 mx-auto mb-4 dark:text-white">
          Sitios y aplicativos web a medida
        </BaseHeading>

        <BaseParagraph id="pa1" name="pa1" size="lg" class="text-muted-500 dark:text-muted-100 mx-auto mb-4">
          Planes de diseño e implementación ✅
        </BaseParagraph>
      </div>
      <div class="mb-10 grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-8 md:gap-y-16" id="row-1">
        <div class="relative">
          <BaseCard rounded="lg" class="p-6" id="support" name="support">
            <BaseHeading as="h3" size="sm" weight="bold" lead="tight"
              class="text-muted-800 center mb-2 text-center align-middle dark:text-white">
              <BaseCard rounded="lg"
                class="border-success-500 !bg-success-500/10 relative border-2 p-5 [&_.child]:!opacity-100">
                <div class="flex flex-col">
                  <h4
                    class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight">
                    Landing Page 🗺
                  </h4>

                  <div class="font-sans">
                    <span class="text-muted-800 dark:text-muted-100 text-xl font-bold">$395.00</span>
                  </div>
                </div>
              </BaseCard>
            </BaseHeading>

            <BaseParagraph id="pa2" name="pa2" size="sm" lead="tight" class="text-muted-400">
              <BaseList>
                <BaseListItem title="Sección inicial (Logo, Banner, tipografia)">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Sección de Nosotros">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Sección de Servicios">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Sección de Testimonios">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Sección y formulario de Contacto">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Llamados a la acción (CTA)">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Integración con tus redes sociales">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Botón dinámico de Soporte (Chatbot, Whatsapp, etc...) ">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="1 cuenta de correo electrónico corporativo.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Google Analytics.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Diseño adaptado responsive para cualquier tipo de pantalla.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Hosting y dominio GRATIS por 1 año.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Certificado SSL (navegación encriptada 100% segura)">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Capacitación para administrarla del sitio.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
              </BaseList>
            </BaseParagraph>
            <div
              class="text-muted-800 center mb-2 mt-10 text-center align-middle dark:text-white [&_.child]:!opacity-100">
              <BaseButtonAction to="https://82o3cze1.forms.app/bashpty-quote" rounded="md" color="danger"
                class="text-xl">
                ¡Quiero mi landing page!
              </BaseButtonAction>
            </div>
          </BaseCard>
        </div>
        <div class="relative">
          <BaseCard rounded="lg" class="p-6" id="admin" name="admin">
            <BaseHeading as="h3" size="lg" weight="bold" lead="tight"
              class="text-muted-800 center mb-2 text-center align-middle dark:text-white">
              <BaseCard rounded="lg"
                class="border-success-500 !bg-success-500/10 relative border-2 p-5 [&_.child]:!opacity-100">
                <div class="flex flex-col">
                  <h4
                    class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight">
                    Sitio Corporativo 🖥
                  </h4>

                  <div class="font-sans">
                    <span class="text-muted-800 dark:text-muted-100 text-xl font-bold">$975.00</span>
                  </div>
                </div>
              </BaseCard>
            </BaseHeading>

            <BaseParagraph id="pa3" name="pa3" size="sm" lead="tight" class="text-muted-400">
              <BaseList>
                <BaseListItem title="Integración con las redes sociales de tu negocio.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Página de Inicio, Nosotros, Servicios, Blog y Contacto.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Listado de todos tus servicios.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Portafolio de trabajos.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Formulario de cotización.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Botón dinámico de Soporte (Chatbot, Whatsapp, etc...).">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Hasta 5 cuentas de correo electrónico corporativo">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Newsletter">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Diseño adaptado responsive para cualquier tipo de pantalla.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Hosting y dominio GRATIS por 1 año.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Certificado SSL (navegación encriptada 100% segura)">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>

                <BaseListItem title="Capacitación para administrarla del sitio.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
              </BaseList>
            </BaseParagraph>
            <div
              class="text-muted-800 center mb-2 mt-10 text-center align-middle dark:text-white [&_.child]:!opacity-100">
              <BaseButtonAction to="https://82o3cze1.forms.app/bashpty-quote" rounded="md" color="success"
                class="text-xl">
                ¡Quiero mi sitio Corporativo!
              </BaseButtonAction>
            </div>
          </BaseCard>
        </div>
        <div class="relative">
          <BaseCard rounded="lg" class="p-6" id="develop" name="develop">
            <BaseHeading as="h3" size="lg" weight="bold" lead="tight"
              class="text-muted-800 center mb-2 text-center align-middle dark:text-white">
              <BaseCard rounded="lg"
                class="border-success-500 !bg-success-500/10 relative border-2 p-5 [&_.child]:!opacity-100">
                <div class="flex flex-col">
                  <h4
                    class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight">
                    Tienda Online 🛍
                  </h4>

                  <div class="font-sans">
                    <span class="text-muted-800 dark:text-muted-100 text-xl font-bold">$685.00</span>
                  </div>
                </div>
              </BaseCard>
            </BaseHeading>

            <BaseParagraph id="pa4" name="pa4" size="sm" lead="tight" class="text-muted-400">
              <BaseList>
                <BaseListItem
                  title="Integración con pasarelas de pago (podrás cobrar por Yappy, ACH, Visa, Mastercard, Nequi y Clave)">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Productos ilimitados.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Botón dinámico de Soporte (Chatbot, Whatsapp, etc...) ">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="3 cuentas de correo electrónico corporativo">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Formulario de contacto.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Newsletter">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Hosting y dominio GRATIS por 1 año.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Certificado SSL (navegación encriptada 100% segura)">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Capacitación para administrarla del sitio.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
              </BaseList>
            </BaseParagraph>
            <div
              class="text-muted-800 center mb-2 mt-10 text-center align-middle dark:text-white [&_.child]:!opacity-100">
              <BaseButtonAction to="https://82o3cze1.forms.app/bashpty-quote" rounded="md" color="danger"
                class="text-xl">
                ¡Quiero la tienda!
              </BaseButtonAction>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
  <LandingFooter />
</template>
