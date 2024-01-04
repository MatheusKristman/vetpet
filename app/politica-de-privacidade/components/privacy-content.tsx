import Link from "next/link";

import { recoleta, barlow } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const titleStyle = "text-3xl text-gray-800 font-medium mb-6 lg:text-4xl";
const textContainerStyle = "w-full flex flex-col gap-y-4 mb-12";
const textStyle = "text-base text-medium font-gray-800/90";

export const PrivacyContent = () => {
    return (
        <section className="w-full lg:bg-privacy-background bg-no-repeat bg-right-bottom bg-[length:50%_100%]">
            <div className="px-6 py-12 md:px-16 lg:container lg:mx-auto lg:py-24">
                <h4 className={cn(recoleta.className, titleStyle)}>
                    Política Privacidade
                </h4>

                <div className={textContainerStyle}>
                    <p className={cn(barlow.className, textStyle)}>
                        A sua privacidade é importante para nós. É política do
                        VetPet respeitar a sua privacidade em relação a qualquer
                        informação sua que possamos coletar no site VetPet, e
                        outros sites que possuímos e operamos.
                    </p>

                    <p className={cn(barlow.className, textStyle)}>
                        Solicitamos informações pessoais apenas quando realmente
                        precisamos delas para lhe fornecer um serviço. Fazêmo-lo
                        por meios justos e legais, com o seu conhecimento e
                        consentimento. Também informamos por que estamos
                        coletando e como será usado.
                    </p>

                    <p className={cn(barlow.className, textStyle)}>
                        Apenas retemos as informações coletadas pelo tempo
                        necessário para fornecer o serviço solicitado. Quando
                        armazenamos dados, protegemos dentro de meios
                        comercialmente aceitáveis ​​para evitar perdas e roubos,
                        bem como acesso, divulgação, cópia, uso ou modificação
                        não autorizados.
                    </p>

                    <p className={cn(barlow.className, textStyle)}>
                        Não compartilhamos informações de identificação pessoal
                        publicamente ou com terceiros, exceto quando exigido por
                        lei.
                    </p>

                    <p className={cn(barlow.className, textStyle)}>
                        O nosso site pode ter links para sites externos que não
                        são operados por nós. Esteja ciente de que não temos
                        controle sobre o conteúdo e práticas desses sites e não
                        podemos aceitar responsabilidade por suas respectivas
                        <Link href="/politica-de-privacidade">
                            políticas de privacidade
                        </Link>
                        .
                    </p>

                    <p className={cn(barlow.className, textStyle)}>
                        Você é livre para recusar a nossa solicitação de
                        informações pessoais, entendendo que talvez não possamos
                        fornecer alguns dos serviços desejados.
                    </p>

                    <p className={cn(barlow.className, textStyle)}>
                        O uso continuado de nosso site será considerado como
                        aceitação de nossas práticas em torno de privacidade e
                        informações pessoais. Se você tiver alguma dúvida sobre
                        como lidamos com dados do usuário e informações
                        pessoais, entre em contacto conosco.
                    </p>
                </div>

                <h4 className={cn(recoleta.className, titleStyle)}>
                    Compromisso do Usuário
                </h4>

                <div className={textContainerStyle}>
                    <p className={cn(barlow.className, textStyle)}>
                        O usuário se compromete a fazer uso adequado dos
                        conteúdos e da informação que o VetPet oferece no site e
                        com caráter enunciativo, mas não limitativo:
                    </p>

                    <ul className="list-disc p-4">
                        <li className={cn(barlow.className, textStyle)}>
                            A) Não se envolver em atividades que sejam ilegais
                            ou contrárias à boa fé a à ordem pública;
                        </li>

                        <li className={cn(barlow.className, textStyle)}>
                            B) Não difundir propaganda ou conteúdo de natureza
                            racista, xenofóbica, Bet Nacional ou azar, qualquer
                            tipo de pornografia ilegal, de apologia ao
                            terrorismo ou contra os direitos humanos;
                        </li>

                        <li className={cn(barlow.className, textStyle)}>
                            C) Não causar danos aos sistemas físicos (hardwares)
                            e lógicos (softwares) do VetPet, de seus
                            fornecedores ou terceiros, para introduzir ou
                            disseminar vírus informáticos ou quaisquer outros
                            sistemas de hardware ou software que sejam capazes
                            de causar danos anteriormente mencionados.
                        </li>
                    </ul>
                </div>

                <h4 className={cn(recoleta.className, titleStyle)}>
                    Mais informações
                </h4>

                <div className={textContainerStyle}>
                    <p className={cn(barlow.className, textStyle)}>
                        Esperemos que esteja esclarecido e, como mencionado
                        anteriormente, se houver algo que você não tem certeza
                        se precisa ou não, geralmente é mais seguro deixar os
                        cookies ativados, caso interaja com um dos recursos que
                        você usa em nosso site.
                    </p>

                    <p className={cn(barlow.className, textStyle)}>
                        Esta política é efetiva a partir de 4 January 2024 21:38
                    </p>
                </div>
            </div>
        </section>
    );
};
