<script setup lang="ts">
definePageMeta({
  title: 'Tu mejor elección tecnológica 🖥️',
  layout: 'landing',
  preview: {
    title: 'Bash Pty',
    description: 'Tu mejor elección tecnológica 🖥️',
    order: 3,
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
          Planes de mantenimiento preventivo, correctivo y predictivo ✅
        </BaseParagraph>
      </div>
      <div class="mb-10 grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16" id="row-1">
        <div class="relative">
          <BaseCard rounded="lg" class="p-6" id="support" name="support">
            <BaseHeading as="h3" size="sm" weight="bold" lead="tight"
              class="text-muted-800 center mb-2 text-center align-middle dark:text-white">
              <BaseCard rounded="lg"
                class="border-success-500 !bg-success-500/10 relative border-2 p-5 [&_.child]:!opacity-100">
                <div class="flex flex-col">
                  <h4
                    class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight">
                    Básico
                  </h4>

                  <div class="font-sans">
                    <span class="text-muted-800 dark:text-muted-100 text-xl font-bold">$38.00</span>
                  </div>
                </div>
              </BaseCard>
            </BaseHeading>

            <BaseParagraph id="pa2" name="pa2" size="sm" lead="tight" class="text-muted-400">
              <BaseList>
                <BaseListItem title="Cambios menores en componentes multimedia.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Copias de seguridad semanales.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Actualización de sistemas.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Gestión de certificados SSL.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Soporte técnico por email.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Respuestas en menos de 24 horas.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Análisis y protección contra virus, spam y malware.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
              </BaseList>
            </BaseParagraph>
            <div
              class="text-muted-800 center mb-2 mt-10 text-center align-middle dark:text-white [&_.child]:!opacity-100">
              <BaseButtonAction to="https://wa.link/6lfpok" rounded="md" color="danger" class="text-xl">
                ¡Obtener plan!
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
                    Premium
                  </h4>

                  <div class="font-sans">
                    <span class="text-muted-800 dark:text-muted-100 text-xl font-bold">$65.00</span>
                  </div>
                </div>
              </BaseCard>
            </BaseHeading>

            <BaseParagraph id="pa3" name="pa3" size="sm" lead="tight" class="text-muted-400">
              <BaseList>
                <BaseListItem title="Cambios menores en componentes multimedia.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Copias de seguridad diarias.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Actualización de sistemas.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Gestión de certificados SSL.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Soporte técnico por email y WhatsApp.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Respuestas en menos de 8 horas.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Análisis y protección contra virus, spam y malware.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Carga y actualización de contenidos.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Actualización de productos y servicios.">
                  <Icon name="ph:check-circle-duotone" class="text-success-500 size-6" />
                </BaseListItem>
              </BaseList>
            </BaseParagraph>
            <div
              class="text-muted-800 center mb-2 mt-10 text-center align-middle dark:text-white [&_.child]:!opacity-100">
              <BaseButtonAction to="https://wa.link/6lfpok" rounded="md" color="success" class="text-xl">
                ¡Obtener plan!
              </BaseButtonAction>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
  <LandingFooter />
</template>
