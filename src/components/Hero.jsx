import { Image, Container, Title, Button, Group, Text, } from '@mantine/core';

export function Hero() {
  return (
    <div className="bg-slate-50">
       <Container size="lg">
      <div className="flex flex-col md:flex-row items-center justify-between h-96">
        <div className="w-full px-10 font-playfiar">
          <Title size={40}>
             L'<span className="text-yellow-300 font-bold">art</span><br/> de la transformation esthétique
             
          </Title>
          <Text  mt="md">
          Plongez dans un monde de beauté, de confiance et de bien-être. Chez L'ART DU SOIN, nous sommes dévoués à révéler votre véritable beauté.
          </Text>
          <Group mt={30}>
            <Button radius="xl" color="beige" size="md" >
              NOUS DECOUVRIR
            </Button>
          </Group>
        </div>
        <Image src="/rituel.jpg" className="h-full w-full object-cover" />
      </div>
    </Container>  
    </div>
   
  );
}