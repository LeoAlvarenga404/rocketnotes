import { Container, Links, Content } from './style'

import { Tag } from '../../components/Tags'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
export function Details(){

  return(
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

            <h1>Introdução ao React</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, dignissimos beatae? Autem nostrum obcaecati libero necessitatibus fuga suscipit nam, impedit possimus dignissimos vel repellendus praesentium exercitationem provident fugit eius tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cumque tempora consequuntur officiis harum saepe omnis, ex labore quia nemo dignissimos aspernatur exercitationem inventore voluptas reiciendis ullam, architecto maxime commodi.mus dignissimos vel repellendus praesentium exercitationem provident fugit eius tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cumque tempor</p>
          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
    
  )
}