UNIVERSIDADE REGIONAL DO NOROESTE DO ESTADO DO 

RIO GRANDE DO SUL – UNIJUÍ

PROGRAMA DE PÓS-GRADUAÇÃO STRICTO SENSU EM DESENVOLVIMENTO REGIONAL











EDUARDO MATHEUS FIGUEIRA











INFRAESTRUTURA DE SANEAMENTO E INCIDÊNCIA DE DOENÇAS NO PARANÁ: UMA ANÁLISE MULTIDIMENSIONAL COM FOCO EM CAUSALIDADE E CONTEXTO





























IJUÍ – RS

2025

EDUARDO MATHEUS FIGUEIRA



















INFRAESTRUTURA DE SANEAMENTO E INCIDÊNCIA DE DOENÇAS NO PARANÁ: UMA ANÁLISE MULTIDIMENSIONAL COM FOCO EM CAUSALIDADE E CONTEXTO













Projeto de Tese submetido ao Programa de Pós-Graduação em Desenvolvimento Regional, área de concentração de Políticas Públicas, Planejamento Urbano e Gestão do Território da Universidade Regional do Noroeste do Estado do Rio Grande do Sul como requisito parcial para a obtenção do título de Doutor em Desenvolvimento Regional.



Orientador: 

Prof. Tarcisio Dorn de Oliveira

Coorientadores: 

Prof. Fabrício Baron Mussi

Prof. Lucir Reinaldo Alves 











IJUÍ – RS

2025































































A Banca Examinadora, abaixo assinada, aprova o Projeto de Tese



INFRAESTRUTURA DE SANEAMENTO E INCIDÊNCIA DE DOENÇAS NO PARANÁ: UMA ANÁLISE MULTIDIMENSIONAL COM FOCO EM CAUSALIDADE E CONTEXTO



elaborado por

EDUARDO MATHEUS FIGUEIRA

como requisito parcial para a obtenção do grau de

Doutor em Desenvolvimento Regional





BANCA EXAMINADORA





_______________________________________________

Prof. Dr. Tarcisio Dorn de Oliveira – Orientador PPGDR/Unijuí

Universidade Regional do Noroeste do Estado do Rio Grande do Sul – Unijuí, Ijuí/RS



_______________________________________________

Prof. Dr. Lucir Reinaldo Alves – Coorientador PPGDRA/Unioeste

Universidade Estadual do Oeste do Paraná – Unioeste, Toledo/PR



_______________________________________________

Prof. Dr. Prof. Fabrício Baron Mussi – Coorientador 

Itaipu Binacional Itaipu Binacional, Foz do Iguaçu/PR



_______________________________________________

Profª. Drª. Fernanda da Cunha Pereira – Membro Interno PPGSAS/Unijuí

Universidade Regional do Noroeste do Estado do Rio Grande do Sul – Unijuí, Ijuí/RS



_______________________________________________

Prof. Dr. Airton Adelar Mueller – Membro Interno PPGDR/Unijuí

Universidade Regional do Noroeste do Estado do Rio Grande do Sul – Unijuí, Ijuí/RS



_______________________________________________

Profª. Drª. Renata Rogowski Pozzo – Membro Externo PPGPLAN/Udesc 

Universidade do Estado de Santa Catarina – Udesc, Florianópolis/SC



_______________________________________________

Prof. Dr. Gilson Batista de Oliveira – Membro Externo PPGPPD/Unila

Universidade Federal da Integração Latino-Americana – Unila, Foz do Iguaçu/PR



Ijuí, 2025.



RESUMO



Apesar dos avanços recentes, a universalização do saneamento básico e a persistência de Doenças Relacionadas ao Saneamento Ambiental Inadequado (DRSAI) continuam sendo problemas públicos no estado do Paraná. Este projeto de tese propõe uma investigação da relação causal entre as melhorias na infraestrutura de saneamento (água e esgoto) e a incidência de DRSAI (como diarreia, dengue e leptospirose) nos 399 municípios paranaenses, cobrindo o período de 2008 a 2022. A tese central é que melhorias na infraestrutura de Saneamento Ambiental causam reduções na incidência de Doenças Relacionadas ao Saneamento Ambiental Inadequado nos municípios paranaenses, sendo esta relação causal moderada por fatores socioeconômicos, climáticos e geográficos locais. O estudo adota uma abordagem quantitativa fundamentada no referencial de inferência causal, estruturado metodologicamente pela "Escada da Causalidade" de Pearl. A pesquisa utiliza uma metodologia de análise de dados secundários (SNIS, DATASUS, IBGE e INMET) que progride em dois níveis: 1) Nível de Associação, para identificar correlações e padrões espaço-temporais; e 2) Nível de Intervenção, que emprega métodos quasi-experimentais, especificamente Propensity Score Matching (PSM) e Diferença em Diferenças (DiD), para controlar fatores de confusão e estimar o efeito causal das intervenções de saneamento. Os resultados esperados incluem a quantificação do impacto causal do saneamento na saúde pública, a identificação de disparidades regionais e a caracterização de como o contexto modula essa relação. Ao focar na causalidade em vez de mera correlação, a pesquisa busca oferecer evidências empíricas para subsidiar o desenho de políticas públicas mais efetivas e direcionadas, contribuindo para o campo do desenvolvimento regional e para a redução de desigualdades.



Palavras-chave: Saneamento Ambiental; DRSAI; Paraná; Inferência Causal; Políticas Públicas; Desenvolvimento Regional.

































resumen



A pesar de los avances recientes, la universalización del saneamiento básico y la persistencia de Enfermedades Relacionadas con el Saneamiento Ambiental Inadecuado (DRSAI) continúan siendo problemas públicos en el estado de Paraná. Este proyecto de tesis propone una investigación de la relación causal entre las mejoras en la infraestructura de saneamiento (agua y alcantarillado) y la incidencia de DRSAI (como diarrea, dengue y leptospirosis) en los 399 municipios paranaenses, cubriendo el período de 2008 a 2022. La tesis central es que las mejoras en la infraestructura de Saneamiento Ambiental causan reducciones en la incidencia de Enfermedades Relacionadas con el Saneamiento Ambiental Inadecuado en los municipios paranaenses, siendo esta relación causal moderada por factores socioeconómicos, climáticos y geográficos locales. El estudio adopta un enfoque cuantitativo fundamentado en el marco de la inferencia causal, estructurado metodológicamente por la "Escalera de la Causalidad" de Pearl. La investigación utiliza una metodología de análisis de datos secundarios (SNIS, DATASUS, IBGE e INMET) que progresa en dos niveles: 1) Nivel de Asociación, para identificar correlaciones y patrones espacio-temporales; y 2) Nivel de Intervención, que emplea métodos cuasiexperimentales, específicamente Propensity Score Matching (PSM) y Diferencia en Diferencias (DiD), para controlar factores de confusión y estimar el efecto causal de las intervenciones de saneamiento. Los resultados esperados incluyen la cuantificación del impacto causal del saneamiento en la salud pública, la identificación de disparidades regionales y la caracterización de cómo el contexto modula esta relación. Al centrarse en la causalidad en lugar de la mera correlación, la investigación busca ofrecer evidencia empírica para fundamentar el diseño de políticas públicas más efectivas y dirigidas, contribuyendo al campo del desarrollo regional y a la reducción de las desigualdades..



Keywords: Saneamiento Ambiental; DRSAI; Paraná; Inferencia Causal; Políticas Públicas; Desarrollo Regional.





ABSTRACT



Despite recent advances, the universalization of basic sanitation and the persistence of Inadequate Environmental Sanitation-Related Diseases (DRSAI) remain public problems in the state of Paraná. This thesis proposal investigates the causal relationship between improvements in sanitation infrastructure (water and sewage) and the incidence of DRSAI (such as diarrhea, dengue, and leptospirosis) in the 399 municipalities of Paraná, covering the period from 2008 to 2022. The central thesis is that improvements in Environmental Sanitation infrastructure cause reductions in the incidence of Inadequate Environmental Sanitation-Related Diseases in Paraná's municipalities, with this causal relationship being moderated by local socioeconomic, climatic, and geographical factors. The study adopts a quantitative approach based on the causal inference framework, methodologically structured by Pearl's "Ladder of Causality." The research uses a secondary data analysis methodology (SNIS, DATASUS, IBGE, and INMET) that progresses through two levels: 1) Association Level, to identify correlations and spatio-temporal patterns; and 2) Intervention Level, which employs quasi-experimental methods, specifically Propensity Score Matching (PSM) and Difference-in-Differences (DiD), to control for confounding factors and estimate the causal effect of sanitation interventions. The expected results include the quantification of the causal impact of sanitation on public health, the identification of regional disparities, and the characterization of how context modulates this relationship. By focusing on causality rather than mere correlation, the research seeks to provide empirical evidence to support the design of more effective and targeted public policies, contributing to the field of regional development and the reduction of inequalities.



Keywords: Environmental Sanitation; DRSAI; Paraná; Causal Inference; Public Policy; Regional Development.

SUMÁRIO



1	INTRODUÇÃO	16

1.1	Problema de Pesquisa	21

1.2	OBJETIVOS DE PESQUISA	22

1.3	Hipóteses de Pesquisa	22

1.4	Justificativa	24

2	REFERENCIAL TEÓRICO	27

2.1	O desenvolvimento e o desenvolvimento regional	27

2.2	O Estudo Histórico das Relações SA e DRSAI	29

2.3	As Múltiplas Relevâncias do SA	32

2.4	A Complexidade nas Relações de Causa e Efeito do SA sobre DRSAI	33

2.5	A investigação de relações causais	35

2.6	A escada da causalidade	37

3	PROCEDIMENTOS METODOLÓGICOS	41

3.1	ABORDAGEM HIPOTÉTICO-DEDUTIVA	41

3.2	MÉTODOS DE PROCEDIMENTO	41

3.3	Delineamento da pesquisa	42

3.4	Marco teórico da inferência causal	42

3.5	TÉCNICAS DE PESQUISA	43

3.6	UNIVERSO E AMOSTRA	44

3.7	Fontes de dados e variáveis	44

3.8	ESTRUTURA DO TRABALHO E ESCADA DA CAUSALIDADE	45

3.9	cONTROLE DE FATORES CONTEXTUAIS E VALIDAÇÃO	47

3.10	iNTEGRAÇÃO METODOLÓGICA E PRODUTOS ESPERADOS	47

4	cronograma	49

5	SUMÁRIO PROVISÓRIO	50

6	Resultados Preliminares	51

6.1	Tabelas de resultados preliminares	52

REFERÊNCIAS	57







INTRODUÇÃO



Esta investigação está vinculada à Universidade Regional do Noroeste do Estado do Rio Grande do Sul (Unijuí), ao Programa de Pós-Graduação Stricto Sensu em Desenvolvimento Regional (PPGDR), à Linha de Pesquisa “Políticas Públicas, Planejamento Urbano e Gestão do Território” e ao Projeto de Pesquisa Institucional “Leitura, planejamento e gestão urbana: inter-relações entre a qualidade de vida das pessoas e as cidades do futuro”, sob coordenação do professor arquiteto e urbanista Tarcisio Dorn de Oliveira.

A  presente investigação tem como tese – “as melhorias na infraestrutura de saneamento ambiental contribuem para a redução da incidência de doenças relacionadas ao saneamento ambiental inadequado nos municípios paranaenses, sendo essa relação causal influenciada por fatores socioeconômicos, climáticos e geográficos locais”.

O Saneamento Ambiental (SA) é um pilar fundamental para o desenvolvimento regional, tanto pela sua natureza própria, quanto pelos encadeamentos socioeconômicos que pode gerar para frente e para trás a depender do contexto de cada local (Ipea, 2024; Pires, 2022). Entender as relações de causa e efeito subjacentes entre o saneamento e outros aspectos da realidade socioeconômica pode ser de grande importância para o planejamento e desenvolvimento urbano e regional.



Além de seu valor instrumental, o saneamento é um direito humano fundamental, reconhecido pela Organização das Nações Unidas (ONU) por meio da Resolução A/RES/64/292, de 28 de julho de 2010 (Pires, 2022, p. 9).



Uma das mais estudadas relações entre o saneamento e aspectos socioeconômicos é a que se verifica entre o acesso a serviços de abastecimento e coleta de água e esgoto e a incidência de determinadas doenças (Costa, 2023). Este grupo de doenças é denominado Doenças Relacionadas ao Saneamento Ambiental Inadequado (DRSAI). Entre as doenças frequentemente associadas com a qualidade do SA estão cólera, diarreia, gastroenterite, amebíase, entre outras (Brasil, 2010).

Embora seja uma das mais reconhecidas, a relação entre SA e aspectos de saúde não é a única. Estudos relacionam a melhoria de SA a melhorias na frequência escolar, redução da presença de animais como ratos e baratas e até no desenvolvimento cognitivo da população atendida por essas melhorias (Scriptore, 2016; Pearson; Mcphedran, 2008; Orgill-Meyer; Pattanayak, 2019).

O acesso ao SA, consequentemente aos seus benefícios, é extremamente desigual no Brasil, de modo que “o acesso das camadas mais pobres da população é ainda muito abaixo daquele usufruído pelos mais ricos” (Mendonça; Motta, 2007, p. 17). Essa desigualdade alimenta um ciclo vicioso: a vulnerabilidade socioeconômica expõe parte da população à falta de SA adequado, o que, por sua vez, aumenta os riscos à saúde, à educação e a outros fatores que reforçam a própria vulnerabilidade socioeconômica dessas famílias.

Secchi (2020) aponta para a possibilidade da existência de uma diferença entre o status quo e uma situação ideal possível na realidade coletiva. No caso do tema aqui discutido, um exemplo de status quo pode ser aquele onde há tanto famílias sem acesso adequado a SA quanto pessoas adoecendo por DRSAI, enquanto um exemplo de situação ideal é uma em que o acesso ao SA seja universalizado e que a incidência de DRSAI seja erradicada da vida das famílias.

A diferença entre status quo e situação ideal pode ser usada como elemento didático para expressar o sentido do termo Problema Público, que é composto por uma série de características, como a de ser um conceito intersubjetivo, representar uma situação coletiva indesejada e representar valores, necessidades e oportunidades não realizadas (Secchi, 2020). Essas características servem para descrever tanto o caso da inequação do acesso ao SA, quanto a incidência de DRSAI.

Estes problemas públicos não podem ser solucionados individualmente pelas pessoas afetadas, mas requererem ação coletiva organizada, normalmente em forma de ação do Estado. As ações sistemáticas que o Estado decide ou não colocar em prática com o objetivo de resolver estes Problemas Públicos é o que podemos chamar de Políticas Públicas (Secchi, 2020; Dye, 2017).



O problema público está para a doença, assim como a política pública está para o tratamento. Metaforicamente, a doença (problema público) precisa ser diagnosticada, para então ser dada uma prescrição médica de tratamento (política pública), que pode ser um remédio, uma dieta, exercícios físicos, cirurgia, tratamento psicológico, entre outros (instrumentos de política pública) (Secchi, 2020, p. 19).



No Brasil, não apenas o Estado reconhece os aspectos de saúde e de SA aqui citados como problemas públicos, como estabelece políticas públicas para sua superação    (Mendonça; Motta, 2007). Apesar deste reconhecimento e de avanços recentes nestes campos, ainda permanece no país a distância entre o status quo de SA inadequado e risco de adoecimento para muitas famílias e uma situação ideal na qual isso não aconteceria (Ipea, 2024).

Isso se dá pelo fato de que, embora o reconhecimento do Estado seja importante para a resolução de um problema público, só isso não basta. Entre a ação intencional do Estado e a solução do problema público, há uma série de fatores que podem influenciar o cumprimento ou não dos objetivos, sendo necessário que este tenha uma série de capacidades estatais para superar eventuais desafios e cumprir suas políticas (Souza; Fontanelli, 2020).

Entre estas capacidades, estão as de instituir e cobrar tributos, impor a lei e a ordem, formular e implementar políticas públicas, alcançar interesses nacionais, dirigir o desenvolvimento socioeconômico, entre outras, a depender do objeto a ser alcançado e do obstáculo a ser superado (Souza; Fontanelli, 2020). No caso de políticas públicas de DRSAI, um obstáculo importante é o de que a incidência destas doenças só pode ser afetada indiretamente, não pode ser reduzida diretamente com uma decisão simples e a assinatura de um papel. Ou seja, é necessário entender os elementos que a causam e como isso ocorre para encontrar pontos em que pode ser possível influir.

O que dificulta esta tarefa é que, no caso de políticas públicas como estas, a própria forma como essa diversidade de elementos interage para gerar os resultados públicos é não linear e varia no tempo, o que as caracteriza como um sistema dinâmico complexo (Morçöl, 2012). Além do SA, muitos outros fatores podem impactar a incidência destas doenças, como o nível educacional e de renda familiar, a higiene doméstica e pessoal, o ambiente físico, as características socioeconômicas, a urbanização, a densidade demográfica e precariedade de serviços públicos (Santos, 2006; Varela, 2022).



I propose the following definition of public policy from a complexity theory perspective: Public policy is an emergent, self-organizational, and dynamic complex system. The relations among the actors of this complex system are nonlinear and its relations with its elements and with other systems are coevolutionary (Morçöl, 2012, p. 19).



Dentre as capacidades necessárias para superar estes desafios e cumprir estes objetivos está a de capturar de forma tangível os aspectos intangíveis da realidade que sirvam para diagnosticar e quantificar problemas, formular e priorizar soluções e/ou acompanhar evoluções e avaliar resultados. Essas representações funcionais de aspectos da realidade também podem ser chamadas de indicadores sociais (Jannuzzi, 2017).



Os indicadores sociais se prestam a subsidiar as atividades de planejamento público e formulação de políticas sociais nas diferentes esferas de governo, possibilitam o monitoramento das condições de vida e bem-estar da população por parte do poder público e sociedade civil e permitem aprofundamento da investigação acadêmica sobre a mudança social e sobre os determinantes dos diferentes fenômenos sociais (Jannuzzi, 2017, p. 15).



No Brasil, há sistemas de informações acessíveis publicamente tanto para SA quanto para DRSAI, que ajudam a capturar esta realidade e compreender os mecanismos envolvidos nesta dinâmica. O Sistema Nacional de Informações em Saneamento Básico (SNIS) compila, padroniza e disponibiliza informações sobre abastecimento de água, coleta de esgoto e resíduos sólidos para os municípios brasileiros.

Já para informações de saúde, o acesso a dados públicos é feito via o DATASUS, onde são disponibilizadas informações desagregáveis sobre morbidades em todo o Brasil, incluindo números de internações e óbitos por doenças como dengue, leptospirose, hanseníase e outras incluídas na categoria DRSAI. Dentre os achados permitidos por informações de SA e DRSAI com estes conhecimentos, nesta tese destacam-se três para contextualização:

1. Quando indicadores sociais representativos do status quo em SA se movem ao longo do tempo em direção a uma situação ideal, o mesmo tende a ocorrer com os indicadores sociais de saúde (Fenwick et al., 2018; Pearson; Mcphedran, 2008).

2. Há o encadeamento de fatos e acontecimentos que sustentam que a correlação entre acesso a SA e redução em DRSAI não é espúria ou mera coincidência, mas sim que há uma relação de natureza causal (Snow, 1856; Costa, 2023).

3. Outros fatores, predominantemente locais, também podem exercer importante influência sobre os resultados de DRSAI, inclusive podendo se sobressair aos impactos do acesso ao SA em alguns casos (Varela, 2022; Santos, 2006).

Os achados 1 e 2 indicam que políticas de SA podem ter resultados em problemas públicos de saúde, enquanto o achado 3 sugere que há limites contextuais a essa correlação. Desta forma, as relações encontradas entre SA, DRSAI e outros fatores são muito úteis em seus próprios contextos físico-temporais, cabendo novos estudos para entender como essa relação se dá em cada caso, sob diferentes perspectivas, e assim orientar as ações de influência nestas realidades e gerar desenvolvimento regional. 

Este assunto é relevante para o estado do Paraná, porque assim como ocorre em outros estados brasileiros, a universalização do acesso a SA adequado e a erradicação das DRSAI ainda são desafios a se cumprir. Estudos como os de Wolfart (2014), Bachstein (2016) e Pastre (2023) mostram que ainda há uma distância entre a situação atual e a ideal a ser superada no contexto do estado.

Segundo dados do SNIS (2025), no estado do Paraná, o atendimento com rede de água foi de 88,3% em 2010 para 96,1% da população em 2022. Já o atendimento com rede de esgoto foi de 52,8% em 2010 para 76,3% em 2022. Embora tenha havido um avanço na última década, ainda há parte da população sem acesso à água e, principalmente, sem esgoto.

Para fins de ilustração, o SNIS (2025) considera que a população total do Paraná era de 11.444.380 habitantes em 2022, o que significa que os 23,7% da população paranaense sem acesso a este recurso podem ser estimados em cerca de 2.712.318 de pessoas, enquanto os 3,9% sem água representam 446.330 pessoas neste ano.

Por outro lado, só no ano de 2022, foram registrados no Paraná 21.384 internações e 197 óbitos por dengue clássica, 5.222 internações e 56 óbitos por diarreia e gastroenterite, entre outras ocorrências por DRSAI (Datasus, 2025). De tal modo, pode-se perceber que, entre muitos outros, o estado do Paraná possui dois desafios: a ausência de SA adequado, e riscos de internações e óbitos por DRSAI sobre as famílias.

Dependendo do contexto, a melhoria do SA pode reduzir a incidência da doença ou ter impacto limitado frente a fatores como urbanização, clima e população. Superar estes dois desafios depende da compreensão de como se dá a relação entre eles nos contextos espaço-temporais específicos do estado, em busca de melhor estimar como essa relação deve se dar no futuro. Isso pode contribuir para orientar políticas públicas de forma mais eficaz.



Problema de Pesquisa



Os estudos da relação entre SA e DRSAI em outros contextos ou escalas territoriais ajudam, mas não são suficientes para entender a realidade específica do contexto paranaense. Os estudos acadêmicos que exploram esta relação para o Paraná são escassos e os existentes são focados em casos de municípios comparados com seu próprio histórico, como em Wolfart (2014), por exemplo.

Isso dificulta entender como essa relação se dá nas diferentes realidades do estado, como também dificulta a estimativa da medida em que ações de SA devem gerar resultados em DRSAI em novas ações e dos impactos de ações passadas. Essa compreensão pode ocorrer de forma gradativa, com diferentes estudos esclarecendo partes dessa relação a partir de diferentes perspectivas. No caso desta tese, a intenção é contribuir respondendo em que medida melhorias na infraestrutura de Saneamento Ambiental causaram reduções na incidência de Doenças Relacionadas ao Saneamento Ambiental Inadequado nos municípios paranaenses entre 2008 e 2022, e como fatores contextuais socioeconômicos, climáticos e geográficos modularam esta relação causal? Nesta pesquisa, essa pergunta se desmembra em 3: 

1) Em que medida os municípios paranaenses que apresentaram melhores indicadores de SA também apresentaram melhores indicadores de incidência de DRSAI entre 2008 e 2022?

2) Como a inclusão de indicadores de contexto ajuda a explicar eventuais casos em que municípios paranaenses de piores indicadores de SA apresentaram melhores indicadores de DRSAI entre 2008 e 2022?

3) Em que medida eventuais associações entre dinâmicas temporais em indicadores de SA e DRSAI dos municípios paranaenses entre 2008 e 2022 podem ser consideradas de natureza causal?

Dar resposta ao problema de pesquisa através destas 3 perguntas específicas pode contribuir com uma maior compreensão das dinâmicas históricas dos efeitos de obras de SA sobre a saúde da população paranaense, o que por sua vez pode ser útil para políticas públicas futuras.







OBJETIVOS DE PESQUISA



Ao responder às perguntas de pesquisa, o objetivo geral deste trabalho é identificar a medida em que melhorias na infraestrutura de Saneamento Ambiental causaram reduções na incidência de Doenças Relacionadas ao Saneamento Ambiental Inadequado nos municípios paranaenses, e como fatores contextuais socioeconômicos, climáticos e geográficos modularam esta relação causal, com a intenção de contribuir com conhecimentos que possam elucidar dinâmicas históricas de SA e DRSAI no estado e contribuir com a formulação de políticas públicas neste campo. Os objetivos específicos da tese são:

a) examinar a dinâmica espaço-temporal de indicadores de SA e DRSAI dos municípios paranaenses entre 2008 e 2022, destacando padrões e tendências de relação, buscando correlações significativas ao longo do período de estudo;

b) analisar de que maneira indicadores contextuais influenciaram a relação entre SA e DRSAI nos municípios do Paraná entre 2008 e 2022, identificando fatores socioeconômicos, climáticos e geográficos que possam ter modulado eventuais associações;

c) Investigar a natureza causal de eventuais associações entre as dinâmicas espaço-temporais de indicadores de SA e DRSAI nos municípios paranaenses entre 2008 e 2022.

Cumprir estes objetivos específicos de forma articulada acarretará na resposta ao problema de pesquisa, explorando desde a dinâmica histórica e as correlações entre SA e a incidência de DRSAI, até os fatores contextuais que influenciam essa relação e a sua natureza causal.



Hipóteses de Pesquisa



A literatura permite que, mesmo durante a elaboração da pesquisa, sejam formuladas algumas hipóteses sobre o que será encontrado ao responder as perguntas e cumprir os objetivos colocados. Para este projeto de pesquisa, colocam-se 3 hipóteses, uma para cada pergunta específica de pesquisa:

Como hipótese 1, temos que a análise revelará que, ao longo do período de 2008 a 2022, os municípios paranaenses com melhores indicadores de SA terão apresentado menores taxas de incidência de DRSAI, mas que essa correlação não será universal devido à influência de fatores contextuais variáveis no tempo e no espaço. Estudos como os de Snow (1854) e Pearson e McPhedran (2008) apontam para uma correlação positiva entre melhorias no SA e na saúde pública. Contudo, a complexidade de políticas públicas apontada por Morçöl (2012) e a variedade de influências destacada por Varela (2022) sugerem que essa relação pode ser atenuada ou amplificada por fatores como urbanização e clima, o que pode resultar em uma associação significativa, mas não perfeita.

A hipótese 2 é a de que a inclusão de indicadores contextuais socioeconômicos, climáticos e geográficos explicará parte dos casos em que municípios paranaenses com indicadores de SA inferiores apresentaram melhores resultados de DRSAI entre 2008 e 2022, revelando que esses fatores modulam a relação entre SA e DRSAI. Essa hipótese se baseia no fato de que a literatura, como em Santos (2006) e Varela (2022), destaca que estas variáveis podem igualar ou até superar o impacto do SA em certos contextos, influenciando a incidência de DRSAI de forma independente ou interativa com o SA.

Como hipótese 3, espera-se que a combinação de métodos de descoberta causal e inferência causal aplicados a dados observacionais com auxílio da literatura científica permitirá concluir que as relações entre melhorias no SA e a redução da incidência de DRSAI nos municípios paranaenses entre 2008 e 2022 não são espúrias, além de esclarecer como variáveis contextuais contribuem para esses efeitos, sustentando a existência de uma influência direta, porém condicionada, do SA sobre as DRSAI. Acredita-se que a análise causal para o estado do Paraná irá corroborar com estudos como o de Snow (1854) no sentido de apontar que a relação demonstrada entre SA e DRSAI é de natureza causal, embora os fatores contextuais já citados possam servir para modular esses resultados, exigindo uma abordagem integrada para confirmar causalidade diante das informações disponíveis.

Essas hipóteses buscam refletir a expectativa gerada pela literatura de que a relação entre saneamento ambiental (SA) e a incidência de Doenças Relacionadas ao Saneamento Ambiental Inadequado (DRSAI) nos municípios paranaenses entre 2008 e 2022 seja significativa, porém modulada por fatores contextuais, com evidências de causalidade que podem ser desvendadas por métodos analíticos e suporte da literatura científica. Ao testar essas hipóteses, a pesquisa busca não apenas confirmar a associação já documentada entre SA e DRSAI em diversos lugares, mas também esclarecer as condições sob as quais essa relação se manifestou ou não no contexto paranaense no período estudado.



Justificativa



A relevância desta tese parte do argumento de que o desenvolvimento regional do Paraná não vai se concretizar plenamente enquanto persistirem os problemas públicos associados à precariedade do SA e à incidência de DRSAI, dada a importância destes fatores para o desenvolvimento, o que é corroborado por IPEA (2024) e Pires (2022).

Em termos de desenvolvimento regional, SA é um vetor estruturante: reduz riscos sanitários, eleva capacidades humanas (saúde, escolaridade) e aumenta eficiência territorial. Demonstrar empiricamente como e em que contextos o SA reduz DRSAI é decisivo para orientar políticas territorialmente sensíveis, aprimorar coordenação intergovernamental e maximizar retornos sociais de investimentos em saneamento no Paraná.

Ao mesmo tempo que superar estes desafios é uma condição essencial para o progresso socioeconômico e o bem-estar da população do estado, tal superação exige mais do que intenções ou ações isoladas. É necessária uma compreensão profunda das relações causais que conectam SA, DRSAI e o contexto local, como pode ser visto em Morçöl (2012) e Souza e Fontanelli (2020) ao tratarem da complexidade das políticas públicas e de capacidades estatais.

A viabilidade dessa compreensão passa pela análise da dinâmica histórica recente do próprio estado, apoiada em indicadores sociais que traduzam aspectos intangíveis da realidade em dados tangíveis (Jannuzzi, 2017). Estes indicadores podem ser usados, entre outras coisas, para distinguir meras correlações estatísticas de relações de natureza causal, um desafio bem ilustrado por Pearl e Mackenzie (2018) ao discutirem a covariância entre vendas de sorvete e crimes, cuja origem está na temperatura do ar, e não na interação direta entre os dois.

No contexto desta tese, compreender se as melhorias no SA efetivamente reduzem a incidência de DRSAI é fundamental para orientar políticas públicas eficazes. Sem essa clareza, pode-se perder oportunidades e as políticas públicas de SA podem ser mal direcionadas, comprometendo sua capacidade de gerar os benefícios esperados em saúde e desenvolvimento.

Um exemplo concreto de oportunidades que podem surgir da intersecção entre SA e objetivos mais amplos é o convênio firmado entre Itaipu Binacional, Itaipu Parquetec e Sanepar, que prevê mais de R$ 84 milhões para infraestrutura de saneamento no oeste do Paraná (Sanepar, 2020).

Embora o SA não esteja entre os objetivos estratégicos diretos de Itaipu, o investimento é justificado pelo seu potencial de fomentar desenvolvimento social, econômico e ambiental, alinhado ao Objetivo Estratégico 08 da empresa, que visa promover tais avanços na área de influência (Sanepar, 2020). Aqui, o saneamento emerge como um instrumento para resultados que transcendem a infraestrutura, como geração de emprego e bem-estar, evidenciando a necessidade de ferramentas analíticas que demonstrem essas conexões.

Assim, esta pesquisa se justifica não só pela urgência em enfrentar os desafios de SA e DRSAI no Paraná, onde, em 2022, 23,7% da população ainda carecia de esgoto e doenças como dengue e diarreia geraram milhares de internações, mas também por seu potencial de oferecer métodos e evidências que ampliem a capacidade de justificar investimentos em saneamento (SNIS, 2025; Datasus, 2025).

Ao explorar as relações entre os indicadores de SA e DRSAI, incluindo em casos em que a relação não é a esperada, a tese aqui projetada pode fortalecer a argumentação para que o SA seja integrado como meio estratégico em iniciativas de desenvolvimento regional, mesmo por atores de setores distintos, como o energético. Além disso, os procedimentos metodológicos propostos aqui podem inspirar estudos semelhantes em outros contextos nacionais, contribuindo para uma compreensão mais robusta das interações entre políticas públicas, resultados públicos e desenvolvimento regional.

Cabe destacar especificamente as motivações que levam à realização desta investigação com base em seus participantes, salientando a importância tanto para mim como pesquisador, quanto para o Programa de Pós-Graduação em Desenvolvimento Regional da Unijuí, na linha de pesquisa Políticas Públicas, Planejamento Urbano e Gestão do Território, para o convênio entre Unioeste, Unijuí e Itaipu Parquetec, que permitiu a realização desta tese e para a sociedade em si considerando os avanços da ciência.

Como pesquisador, esta tese se motiva a partir da continuação da construção de uma carreira acadêmica focada na contribuição em direção a possibilitar o uso de dados e tecnologia para a tomada de decisão de modo a aproximar cada vez mais a intenção de transformação da realização da transformação. Em outras palavras, este trabalho é parte do esforço pessoal em contribuir com o aperfeiçoamento da capacidade estatal de influenciar intencionalmente na realidade regional, neste caso específico, entendendo a relação causal entre uma ação intencional de produção de infraestrutura de saneamento com um resultado público indireto que é a redução de DRSAI.

Para o PPGDR, a motivação se baseia no mesmo sentido, da produção científica que contribua para aumentar o conhecimento e o domínio em técnicas e ferramentas de planejamento e gestão do desenvolvimento regional, na ideia de que, ao aumentar o domínio da compreensão da realidade em termos de relações causais, pode-se aumentar a capacidade de agir e influenciar intencionalmente a realidade de uma região em conformidade com o planejado.

Para o convênio, a pesquisa se motiva pela busca do Itaipu Parquetec e também das universidades envolvidas em produzir desenvolvimento regional, tarefa que se torna muito difícil sem conhecimentos que permitam entender quais ações podem ser feitas para gerar este desenvolvimento regional e em quais medidas. Parte da missão que justifica a própria existência do Itaipu Parquetec é o apoio tecnológico e científico à Itaipu Binacional no cumprimento de sua missão, que por sua vez inclui a geração de desenvolvimento regional.

Já para a sociedade considerando o avanço da ciência, esta pesquisa se motiva pelo aprofundamento da abordagem causal no estudo das ações coletivas/governamentais e dos resultados públicos destas ações. Acredita-se que quanto mais domínio científico houver a respeito das relações de causa e efeito das ações coletivas, maior pode ser a capacidade do grupo social em decidir e influenciar seu próprio futuro. 



REFERENCIAL TEÓRICO



Para embasar a busca por estas respostas, vale estabelecer o referencial para alguns aspectos importantes desta pesquisa. Primeiramente, cabe discutir o que é o desenvolvimento regional neste contexto, o que SA e DRSAI têm a ver entre si e com este conceito de desenvolvimento regional e como debater tudo isso usando a ideia de causa e efeito dentro de um marco teórico.



O desenvolvimento e o desenvolvimento regional



No dicionário Aurélio (2008, p. 304), desenvolver significa fazer crescer, medrar, prosperar; significa também exercer, aplicar; gerar, produzir; expor com minúcia; crescer, aumentar, progredir. A palavra desenvolver pode ser usada em diversos contextos podendo assumir diferentes significados a depender de onde e como está sendo empregada.

Neste trabalho, nós não estamos falando de qualquer forma de desenvolvimento, mas especificamente do desenvolvimento no contexto socioeconômico e no contexto regional. Neste caso, o termo hoje usado para esse assunto é o do desenvolvimento, mas não foi assim desde o início.

Para fins deste trabalho, podemos traçar o início do debate sobre este tema na busca por compreender as mudanças sociais e econômicas que ocorriam no período de transição nos métodos de produção entre os séculos XVIII e XIX, com a intenção de entender e explicar os processos pelos quais ocorria o crescimento econômico especificamente (Matta & Verdan, 2023; Saavedra & Armella, 2009).

De partida, os debates tratando de riqueza e progresso se referiam a conceitos como crescimento, maximização e, por fim, desenvolvimento, à medida que o planejamento econômico se consolidava tecnicamente, especialmente até os anos 1960, o que se ligava diretamente aos debates sobre industrialização e modernização (Ramos, 2017).

Mudanças significativas no debate começam a acontecer no período pós-guerra (1950-1979), com a formalização de teorias que começam a distinguir o crescimento econômico do desenvolvimento em um sentido mais amplo. Naquele período, houve uma mudança semântica dinâmica, pela qual o conceito deixa de ser apenas um sinônimo de crescimento econômico para ganhar um aspecto multidimensional (Matta & Verdan, 2023; Saavedra & Armella, 2009).

Ao conceito de crescimento econômico são incorporados conceitos de desenvolvimento humano/social e sustentabilidade, de modo que o crescimento econômico deixa de ser considerado suficiente para o desenvolvimento, colocando melhorias incrementais sobre estas outras dimensões como parte importante do que se convencionou chamar de desenvolvimento. (Maldonado & Araque, 2023).

Essa transformação também foi impulsionada por uma reavaliação crítica dos modelos anteriores. A partir dos anos 1980, cresceu o ceticismo em relação aos modelos de crescimento unilineares. Surgiram críticas às suposições a-históricas e eurocêntricas. Autores como Galchu (2017) e Gunaratna (2017) questionam os modelos universalistas, diferenciando as visões coloniais das perspectivas socioculturais contemporâneas e defendendo compreensões sensíveis ao contexto, com o surgimento de metas centradas nas pessoas.

Foi nesse contexto de expansão e crítica que o "Desenvolvimento Regional" emergiu e se consolidou como um campo de estudo próprio. Mesmo que ligado ao conceito abrangente de desenvolvimento, o desenvolvimento regional evoluiu para tratar de dinâmicas específicas. Autores como Quan (2015) pesquisaram a longa história das teorias de desenvolvimento econômico regional (1800-2000), enquanto Radulović et al. (2014) definem o desenvolvimento regional como focado em processos espacialmente delimitados que influenciam o crescimento econômico, a equidade social e a mobilização de recursos dentro de territórios definidos.

A principal diferença, como apontado por Corrêa et al. (2019), é que o desenvolvimento regional trata explicitamente de desigualdades espaciais, aspectos territoriais e a complexidade da distribuição de riqueza, enquanto o desenvolvimento geral é entendido como um processo socioeconômico mais amplo. Assim, o desenvolvimento regional evoluiu para enfatizar as dinâmicas espaciais, territoriais e locais que governam as disparidades e os potenciais regionais.

A ideia atual de desenvolvimento regional que fundamenta este trabalho não é monolítica, mas sim o resultado de um acúmulo de teorias concorrentes. Dunford (2008) pesquisa essa variedade de modelos, que vão desde as teorias neoclássicas até as de crescimento endógeno. Soja (2008) descreve uma visão geral histórica do planejamento regional, identificando fases que transitaram de abordagens baseadas em recursos, para o bem-estar, depois para o empreendedorismo e, mais recentemente, para o chamado "novo regionalismo".

O pensamento contemporâneo sobre o tema é marcadamente multidisciplinar, integrando perspectivas econômicas, geográficas, sociais e políticas. No contexto latino-americano e brasileiro, esse debate é fortemente influenciado por perspectivas críticas. Brito et al. (2018), por exemplo, relacionam a teoria do desenvolvimento regional ao pensamento social latino-americano e aos padrões de poder, analisando as teorias da modernização, estruturalismo e dependência, e defendendo abordagens decoloniais e pós-coloniais.

Na mesma linha, Theis (2022), ao avaliar o desenvolvimento regional no Brasil, critica os modelos tradicionais centrados no capital e no Estado, propondo a "autodeterminação social" como uma estrutura alternativa. Portanto, o desenvolvimento regional é hoje entendido como um processo complexo.

Dunford (2008) destaca sua natureza dialética e cumulativa, onde trajetórias históricas e dependências de caminho influenciam os resultados atuais. Nesta pesquisa, ele é adotado como a escala crítica para operacionalizar as metas mais amplas de um desenvolvimento multidimensional (social, sustentável e humano) em territórios específicos.



O Estudo Histórico das Relações SA e DRSAI



Em 1854, Londres foi atingida por uma epidemia de cólera que causou adoecimento e mortes. Neste período, a doença não era conhecida com os detalhes que se conhece hoje, mas John Snow já havia publicado em 1849 sua teoria inicial sobre a cólera ser uma doença que se inicia no trato alimentar e que é comunicável de pessoa a pessoa. Investigando mais a fundo a doença, sobretudo na região sul da capital inglesa, ele identificou uma forte correlação entre a incidência de cólera, a densidade e insalubridade dos povoados (Snow, 1856).

Snow (1856) observou ainda uma associação entre a fonte de água e a mortalidade tanto em Londres como em outras cidades, destacando o caso da Lamberth Water Company, que mudou sua fonte de captação para um local mais limpo do rio Tâmisa e os distritos atendidos pela empresa sofreram menos durante a epidemia de 1854. Já as regiões atendidas pela empresa Southwark and Vauxhall coletava água de um local menos limpo, o que se soube através dos altos níveis de sal na água, indicando intrusão da água do mar. Isso conduziu à conclusão de que “the disease was between thirteen and fourteen times as fatal to the population having the impure water as to that having the improved supply" (Snow, 1856, p. 244).

O autor ainda argumenta que a mera "impureza ordinária" da água não era suficiente para causar a cólera. Ele afirmou que a doença só se propaga quando a "matéria mórbida específica" da cólera entra na água. Snow (1956) usou o exemplo do poço da Broad Street (que ele investigou em outra ocasião) para ilustrar que, embora a água estivesse contaminada com esgoto, a cólera só se espalhou quando um caso de cólera ocorreu entre os usuários do banheiro conectado ao poço.

Estudos como esse ajudam a compreender a origem de surtos de doenças fatais, como a cólera, mostrando que o local da coleta da água estar contaminado ou não faz diferença na incidência de doenças, permitindo que se saiba o que fazer para evitá-las. O conjunto de serviços e infraestruturas e instalações operacionais implementadas com a intenção de mitigar riscos ambientais como estes evoluiu até os dias atuais sob a denominação geral de SA (Cesa, 2012).

Mais especificamente, pode-se entender que SA se refere principalmente ao “conjunto de serviços, infraestrutura e instalações operacionais de abastecimento de água, esgotamento sanitários, limpeza pública e manejo dos resíduos sólidos e drenagem e manejo de águas pluviais" (Brasil, 2005, p.39. Neste trabalho, os aspectos relacionados ao abastecimento de água potável e coleta de esgotamento sanitário serão o foco dentre os fatores de SA.

Este estudo trabalhará com as séries históricas de água e esgoto disponíveis nas seguintes famílias de informações e indicadores do SNIS: AE - Informações gerais; AE - Informações financeiras; AE - Informações de água; AE - Informações de esgotos; AE - Informações de qualidade; AE - Indicadores econômico-financeiros e administrativos; AE - Indicadores operacionais - água; AE - Indicadores operacionais - esgoto; AE - Indicadores de qualidade.

É importante notar que a própria categorização de uma infraestrutura ou serviço como de SA depende da sua relação efetiva com a mitigação de riscos ambientais de saúde como os investigados por Snow (1856). Inclusive, existe não apenas a cólera, mas todo um conjunto de Doenças Relacionadas ao Saneamento Ambiental Inadequado (DRSAI) (Brasil, 2010).

Todas as doenças listadas na tabela de classificação ambiental das infecções relacionadas com a água em Brasil (2010, p.65) serão analisadas individualmente neste trabalho em forma de internações e óbitos. Mais especificamente, serão consideradas nesta tese as: doenças de transmissão feco-oral; doenças transmitidas por inseto vetor; doenças transmitidas através do contato com a água; doenças relacionadas com a higiene; geo-helmintos e teníases.

Através do DATASUS, é possível obter dados mensais desagregados sobre cada uma destas doenças. Neste trabalho, os interesses principais estão nos números de internações e óbitos por local de origem do paciente. As informações serão desagregadas por ano da internação, por município e por CID.

Dados sobre SA e DRSAI como estes não são importantes apenas para o trabalho de Snow (1856) e a presente tese. Na verdade, a literatura científica é farta de estudos ao longo de diversos anos, em diversos locais, sob diversas perspectivas, explorando a relação entre essas duas dimensões. Pires (2022), por exemplo, encontrou uma correlação inversamente proporcional para os dados de acesso a água e esgoto e DRSAI para o Brasil.

Mendonça e Motta (2007) mostraram que investimentos em água tratada e esgoto são ações preventivas economicamente mais justificáveis do que outras formas de redução da mortalidade. Por outro lado, Mesquita (2023) mostra que municípios com alta incidência de arboviroses geralmente apresentam baixos níveis de SA, associado ao fato de que as estratégias para lidar com a intermitência e escassez de água fornecem ambiente propício para insetos que servem como vetores destas doenças.

No estado do Paraná, essa relação também já foi testada por estudos como o de Wolfart (2014), no qual a autora estudou o impacto do SA na mortalidade infantil no estado do Paraná. Foi usada a técnica de dados em painel nos anos censitários de 2000 e 2010. O estudo demonstrou que os impactos do abastecimento de água e crescimento da cobertura do programa saúde da família foram mais significativos para a redução da mortalidade do que as variáveis esgotamento sanitário e PIB per capita.

Além disso, estudos como os de Bachstein (2016) e Pastre (2023) mostram que essa realidade se repete tanto no litoral, quanto no interior do estado, sendo comuns os casos de famílias sem acesso à rede pública de SA, o que ajuda na prevalência de casos de DRSAI. Na seção 1 será feito um detalhamento maior dos dados históricos de SA e DRSAI no estado segundo os dados disponíveis no SNIS e no Datasus.



As Múltiplas Relevâncias do SA



Apesar de a relação entre SA e DRSAI estar entranhada em seus próprios conceitos, a necessidade do SA se afirma em si mesma primeiramente. Isso significa dizer que o SA é importante não só por evitar doenças, mas por ter impactos muito além desses, o que leva o SA a ser reconhecido como um direito humano fundamental pela Organização das Nações Unidas (ONU) através da Resolução A/RES/64/292, de 28 de julho de 2010 (Pires, 2022).

O acesso à água tratada e esgoto sanitário constitui um valor intrínseco por entender-se que permite a ampliação do conjunto de possibilidades de funcionamento de um indivíduo. Uma adequada provisão de SA é um requisito fundamental para o desenvolvimento humano e para a dignidade pessoal (Pearson; Mcphedran, 2008). Ou seja, os impactos em saúde fazem parte da importância do SA, mas não a esgotam.

Fenwick et al. (2018) realizaram uma meta-análise sobre os impactos globais de SA e encontraram que intervenções em SA produziram reduções de doenças diarreicas e entéricas, mas também promoveram mudanças da probabilidade de adoção de novas práticas de higiene e redução no absenteísmo e abandono escolar. Orgill-Meyer e Pattanayak (2019) observaram dados históricos na índia e identificaram que vilas com maior cobertura de privadas obtiveram pontuações significativamente mais altas em testes cognitivos dez anos depois, sendo o efeito especialmente forte em meninas.

Outros efeitos de melhorias no SA não relacionados à saúde são demonstrados na revisão de literatura feita por Pearson e Mcphedran (2008). Foram encontrados estudos demonstrando que os efeitos podem se dar sobre a violência e abuso sexual contra mulheres, que muitas vezes precisam esperar até a noite para fazer suas necessidades em áreas abertas.

Além disso, os autores também encontraram que a falta de instalações sanitárias afeta o número de crianças que concluem o ensino fundamental, mais uma vez, com destaque para as meninas, relacionando desta vez às dificuldades do período menstrual. Além destes, são mencionadas melhorias ambientais, econômicas e de dignidade pessoal (Pearson; Mcphedran, 2008).

Scriptore (2016) investiga em sua tese de doutorado, os impactos do SA na saúde e na educação utilizando dados municipais e distritais do Brasil, empregando econometria espacial e não-espacial. Entre os achados do estudo, está o aumento de 0,11 pontos percentuais na taxa de frequência escolar a cada 1% de aumento no acesso ao SA. Ao mesmo tempo, o aumento de 1% de acesso a SA também está associado a quedas de 0,31 e 0,12 pontos percentuais na taxa de distorção idade-série e abandono escolar.

Diante destes achados, é difícil ignorar o SA como uma ferramenta de política pública com encadeamentos importantes. O conjunto de evidências que apontam para as possibilidades de obter reduções de incidência de DRSAI e melhoria de outros fatores por meio da melhoria de aspectos de SA é robusta o suficiente para isso. Entretanto, é importante notar que esta relação não é simples e, na realidade, ela pode variar com as condições de cada local, o que dificulta a previsão de resultados em DRSAI de esforços em SA.



A Complexidade nas Relações de Causa e Efeito do SA sobre DRSAI



A maior parte dos estudos que apontam para relações entre SA e DRSAI também aponta para outros fatores determinantes na incidência destas doenças. Santos (2006) investigou a incidência do que chama de doenças transmitidas pela água (DTHA), procurando saber se a falta de SA seria a principal causa. Neste caso, a descoberta foi que os principais fatores de influência na realidade foram o nível educacional e a renda familiar, embora o SA também tenha impacto.

Varela (2022) por sua vez aponta para outros fatores de importância na incidência de DRSAI. Alguns exemplos significativos são as chuvas sazonais, o aumento da temperatura e da umidade relativa do ar e a densidade demográfica, que demonstram efeito principalmente sobre dengue e leptospirose. O autor também corrobora com os achados de Santos (2006), identificando que o nível educacional tem efeito notável sobre a incidência de DRSAI.

Isso significa que a incidência de DRSAI não é produzida por um ou outro fator apenas, em uma taxa fixa e universal. Ao contrário, o número de internações e óbitos por doenças como diarreia, dengue e leptospirose pode ser impactado por diversos fatores interagindo entre si de forma variável ao longo do tempo e do espaço. Morçöl (2012) propõe que a teoria da complexidade pode oferecer conhecimentos importantes para lidar com políticas públicas com estas características.

Para a teoria da complexidade, estes sistemas se diferenciam de sistemas complicados pelo poder de descrição que a análise dos elementos tem sobre a compreensão do sistema como um todo. Por exemplo, chips de computador ou aviões jumbo, por exemplo, são feitos de inúmeros componentes sofisticados, mas a relação entre estes elementos é fixa e previsível no tempo, e é possível compreender a forma como estes elementos interagem entre si para gerar o sistema como um todo (Cilliers, 1998).

Por sua vez, sistemas complexos não apenas são formados por uma grande quantidade de elementos, mas a relação entre estes elementos não é a mesma com o passar do tempo, o que gera características inesperadas ou imprevisíveis a partir apenas da observação dos componentes do sistema, as chamadas características emergentes (Cilliers, 1998). Por isso, Morçöl (2012) define políticas públicas como um sistema dinâmico complexo emergente e auto organizacional, e que as relações entre os atores deste sistema são não lineares e coevolutivas.

No tema de interesse deste estudo, isso fica muito claro. A depender da época e do local, a relação entre temperatura e umidade do ar, precipitação, disponibilidade de SA, urbanização, hábitos de higiene e outros incontáveis elementos se dá de forma específica, aumentando a incerteza da transferência de resultados encontrados em outros momentos e locais para a tomada de decisão.

 É importante ressaltar que a teoria da complexidade aplicada a políticas públicas defende que os resultados de políticas públicas dependem de diversos fatores, nem todos sob controle ou passíveis de previsibilidade (Cairney, 2012). Entretanto, isso não significa que o Estado não seja capaz de produzir resultados intencionalmente por meio de políticas públicas, mas sim que a produção desses resultados exige o reconhecimento da complexidade que produz a política pública em cada contexto específico (Morçöl, 2012).

Se não conhecer a complexidade envolvida na produção de um determinado resultado é um risco para o sucesso de políticas públicas, então é possível assumir que a compreensão da complexidade é uma capacidade estatal necessária para a formulação e implementação dessas políticas, o que Souza e Fontanelli (2020, p. 45) classificaram como “capacidade administrativa”.

Como o interesse aqui é explorar a relação entre SA e DRSAI, assumindo que aquela produza mudanças nesta, a mera associação temporal não é suficiente. Pearl e Mackenzie (2018) comentam, por exemplo, que há associação temporal entre a venda de sorvetes e o cometimento de crimes, mas não por relação direta entre sorvete e crimes, e sim pela relação de ambos com as temperaturas mais altas. Neste caso, reduzir as vendas de sorvete sem que as temperaturas mudem não poderia servir como uma ferramenta de redução do cometimento de crimes, mesmo que seja possível identificar uma associação temporal histórica entre estas variáveis.

No caso da relação entre SA e DRSAI é importante entender até que ponto vai a relação para estas dimensões nos municípios paranaenses. Embora este estudo não se dedique a esgotar o assunto da causalidade entre estas variáveis, cabe discutir essa ciência para melhor compreensão de aspectos importantes desta tese.



A investigação de relações causais



Desde Aristóteles, com sua proposta de quatro causas, passando pelos debates medievais sobre a onipotência divina e a possibilidade de conhecer as causas verdadeiras, até a Revolução Científica e o surgimento do mecanicismo, a busca por entender por que as coisas acontecem tem sido uma constante (Losee, 2017).

No entanto, a causalidade sempre foi um terreno delicado e escorregadio. Hume, no século XVIII, lançou um desafio à nossa capacidade de inferir relações causais, argumentando que nos baseamos no hábito e na conjunção constante de eventos, e não em uma conexão necessária que podemos observar diretamente. Kant, em resposta, defendeu que a causalidade é uma categoria fundamental do nosso entendimento, essencial para organizar a experiência (Losee, 2017).

No século XX, a estatística, em sua fase inicial com Pearson e Fisher, optou por um caminho mais conservador, focando em correlações e associações, e evitando, em grande medida, a discussão sobre causalidade. Pearl e Mackenzie (2018) chamam essa postura de "acorrelacionalismo", dizendo que esta limitou o desenvolvimento da ciência e da tomada de decisões, ao negligenciar a importância de distinguir relações causais de meras coincidências.

Após o período dominado pela visão acorrelacional de Pearson e Fisher, o campo da inferência causal passou por um renascimento. Inicialmente, a filosofia da ciência deu passos importantes. Carl Hempel, por exemplo, desenvolveu os modelos de explicação Dedutivo-Nomológico (D-N) e Indutivo-Estatístico (I-S), buscando estabelecer critérios para explicações científicas baseadas em leis, tanto determinísticas quanto probabilísticas. Essa abordagem, embora influente, foi complementada e desafiada por outras perspectivas (Frosini, 2006).

Wesley Salmon, influenciado por Hans Reichenbach, propôs o modelo de Relevância Estatística (S-R), que se afastava da ideia de leis universais e se concentrava na comparação de probabilidades: uma causa é aquilo que altera a probabilidade de ocorrência de um efeito (Frosini, 2006; Losee, 2017). Essa abordagem probabilística foi posteriormente formalizada por Patrick Suppes, que definiu causas genuínas e espúrias, abrindo caminho para a análise de situações em que a correlação não implica causalidade (Frosini, 2006).

Enquanto isso, na filosofia, J.L. Mackie introduziu a condição INUS (uma causa é uma parte insuficiente, mas necessária, de uma condição desnecessária, mas suficiente), reconhecendo a complexidade das relações causais em cenários do mundo real, onde múltiplas causas podem contribuir para um efeito. Essa visão se distanciava da ideia de causas únicas e necessárias, abrindo espaço para modelos mais flexíveis (Frosini, 2006).

Em paralelo a esses desenvolvimentos filosóficos, a estatística e a ciência da computação começaram a desenvolver ferramentas mais poderosas para lidar com a causalidade. Sewall Wright, ainda na década de 1920, introduziu os diagramas causais, uma representação gráfica das relações entre variáveis (Pearl; Mackenzie, 2018). Esses diagramas causais, posteriormente formalizados como Directed Acyclic Graphs (DAGs), tornaram-se uma ferramenta fundamental para a modelagem causal (Frosini, 2006; Pearl; Mackenzie, 2018).

Mais tarde, Pearl desenvolveu o "do-calculus", uma linguagem matemática que permite distinguir entre observar uma variável e intervir sobre ela. Essa distinção, crucial para a inferência causal, formaliza a ideia de que uma causa é algo que, se manipulado, altera o efeito. O do-calculus, juntamente com os DAGs, fornece um framework completo para representar, inferir e responder a perguntas causais, inclusive contrafactuais ("E se...?") (Pearl; Mackenzie, 2018).

Outras contribuições importantes incluem a abordagem de Donald Rubin, com o conceito de resultados potenciais, que se aproxima da ideia de contrafactuais, e o desenvolvimento de técnicas para lidar com em estudos observacionais, como o propensity score. James M. Robins estendeu esses métodos para estudos longitudinais, onde as variáveis podem mudar ao longo do tempo (Frosini, 2006).



A escada da causalidade



Pearl e Mackenzie (2018) propuseram também uma metáfora e um framework conceitual para organizar o raciocínio causal em três níveis hierárquicos, dando o nome de “Escada da Causalidade”. Cada degrau da escada representa um tipo diferente de pergunta causal, exigindo um tipo diferente de informação e um nível crescente de sofisticação cognitiva. Compreender essa hierarquia é fundamental para entender as limitações das abordagens estatísticas tradicionais e o potencial da "revolução da causalidade".

O primeiro degrau, o da Associação (ou Observação), é o domínio da estatística tradicional e da maior parte do aprendizado de máquina atual. Neste nível, a preocupação é encontrar regularidades e associações nos dados. As perguntas típicas são do tipo: "O que acontece se eu vir...?". Por exemplo, podemos observar que clientes que compram pasta de dentes também tendem a comprar fio dental (Pearl; Mackenzie, 2018).

Essa associação pode ser expressa matematicamente como uma probabilidade condicional: P(fio dental | pasta de dentes). A análise estatística, com suas ferramentas de correlação, regressão e classificação, é suficiente para responder a perguntas nesse nível. No entanto, é importante lembrar novamente que a associação não implica causalidade. A correlação entre a compra de pasta de dentes e fio dental não significa que uma cause a outra; ambas podem ser causadas por um terceiro fator, como a preocupação geral com a higiene bucal (Pearl; Mackenzie, 2018).

Neste estudo, por exemplo, para este degrau serão usadas as técnicas de correlação de Spearman, de Kendall e de Somers' D, bem como duas adaptações de Kendall e Spearman para permitir a exploração de casos que fujam à regra esperada. Estas técnicas trabalham com a lógica ordinal, que permite trabalhar com o conceito de “melhor/pior” implícito no problema de pesquisa desta tese.

No segundo degrau, não estamos mais interessados apenas em observar os dados, mas em manipular o mundo e prever as consequências dessas manipulações. As perguntas típicas são do tipo: "O que acontece se eu fizer...?". Por exemplo, um gerente de supermercado pode se perguntar: "Qual a probabilidade de vendermos mais fio dental se definirmos o preço da pasta de dentes para um determinado valor?" (Pearl; Mackenzie, 2018).

Essa pergunta não pode ser respondida diretamente com dados observacionais, pois exige que consideremos o efeito de uma ação que altera o ambiente. A notação de Pearl, com o operador "do", formaliza essa distinção: P (fio dental | do (pasta de dentes = preço X)). Responder a perguntas de intervenção requer um modelo causal que represente as relações de causa e efeito entre as variáveis (Pearl; Mackenzie, 2018).

A principal diferença no estudo da causalidade entre dados experimentais e observacionais reside no controle sobre a atribuição do tratamento e na presença de variáveis de confusão. Em experimentos randomizados, o tratamento é atribuído aleatoriamente, o que implica que, em média, os grupos tratados e não tratados são comparáveis em relação a todas as outras características, tanto observadas quanto não observadas (Hernan; Robins, 2024).

Essa aleatoriedade garante que não haja variáveis de confusão, ou seja, que não existam causas comuns do tratamento e do resultado. Consequentemente, a associação observada entre o tratamento e o resultado pode ser interpretada como um efeito causal. Em um experimento randomizado ideal, as condições de identificação (trocabilidade, positividade e consistência) se mantêm por design (Hernan; Robins, 2024).

Por outro lado, em estudos observacionais, o pesquisador não tem controle sobre a atribuição do tratamento. As decisões de tratamento dependem frequentemente de preditores de resultados, como fatores prognósticos. Isso significa que os grupos tratados e não tratados podem diferir sistematicamente em várias características, criando variáveis de confusão (Hernan; Robins, 2024). Nesses casos, a associação entre tratamento e resultado pode ser devida a outros fatores, e não a um efeito causal direto do tratamento. A melhor explicação para uma associação entre tratamento e resultado em um estudo observacional nem sempre é um efeito causal do tratamento sobre o resultado (Hernan; Robins, 2024).

Para realizar inferência causal em dados observacionais, é necessário ajustar para os fatores de confusão utilizando métodos estatísticos como propensity score matching, inverse probability weighting (IPW) ou g-formula. Esses métodos visam emular um experimento randomizado, criando grupos comparáveis em relação às características observadas (Hernan; Robins, 2024).

No entanto, é importante reconhecer que esses métodos dependem de suposições que podem não ser verificáveis, como a ausência de variáveis de confusão não medidas. Além disso, para identificar o efeito causal em estudos observacionais, é necessária uma suposição externa aos dados (Hernan; Robins, 2024).

A análise de dados observacionais é como uma tentativa de emular um ensaio clínico. A validade da inferência causal em estudos observacionais depende da capacidade de medir e ajustar para todas as covariáveis relevantes que afetam tanto o tratamento quanto o resultado, da verificação da positividade e consistência. Há uma lógica de que os estudos observacionais precisam explicitar o efeito causal de interesse e o subconjunto da população no qual o efeito está sendo computado (Hernan; Robins, 2024).

Para este estudo, que é baseado em dados observacionais, serão usadas técnicas para os devidos ajustes, principalmente o matching de municípios por suas características contextuais e o uso de variáveis instrumentais como valor dos investimentos em SA, por exemplo. Neste estudo também se propõe uma adaptação da técnica de diferença em diferenças para ver se os municípios que tiveram melhorias em seus indicadores de SA também tiveram melhorias em indicadores de DRSAI.

O terceiro e mais alto degrau é o dos Contrafactuais. Aqui, a preocupação está em raciocinar sobre realidades que não existem, comparando o mundo observado com cenários hipotéticos. As perguntas típicas são do tipo: "O que teria acontecido se eu tivesse feito...?" e "Por quê?" (Pearl; Mackenzie, 2018).

Voltando ao exemplo do supermercado, "Teríamos vendido mais fio dental se não tivéssemos aumentado o preço da pasta de dentes?". Responder a perguntas contrafactuais exige um modelo causal completo, que nos permita simular o efeito de mudanças hipotéticas no passado.

Em dados observacionais, trabalhar no nível contrafactual significa estimar o que teria ocorrido para uma unidade específica – como um município – sob uma condição alternativa àquela que foi observada. Isso vai além de prever os efeitos médios de uma intervenção (segundo degrau), pois requer reconstruir os resultados potenciais não observados, como "Qual teria sido a taxa de DRSAI neste município se ele não tivesse recebido melhorias no saneamento?" (Pearl; Mackenzie, 2018).

 Essa tarefa depende de um modelo causal que incorpore relações entre variáveis e permita inferir esses cenários hipotéticos, ajustando para as varáveis de confusão que afetam tanto o tratamento quanto o resultado (Pearl; Mackenzie, 2018).

A força do terceiro degrau está em sua capacidade de responder não apenas ao "o que teria mudado", mas também ao "por que" um resultado específico ocorreu. Por exemplo, podemos investigar se a alta incidência de DRSAI em um município foi devido à falta de saneamento ou a outros fatores, como precipitação elevada, simulando o contrafactual em que o saneamento tivesse sido universalizado.

Métodos como a g-formula, ponderação por propensity score e emulação de ensaios-alvo são usados para estimar esses resultados potenciais, mas todos dependem de suposições fortes, como a ausência de variáveis de confusão não medidas e a consistência entre os dados observados e os cenários hipotéticos (Hernan; Robins, 2024).





PROCEDIMENTOS METODOLÓGICOS



Conforme Marconi e Lakatos (2003) a estrutura metodológica é delineada para responder às perguntas de pesquisa e alcançar os objetivos propostos, utilizando uma combinação de métodos e técnicas que se complementam e permitem uma análise aprofundada, neste caso, da relação entre SA e DRSAI entre 2008 e 2022 nos municípios paranaenses.



ABORDAGEM HIPOTÉTICO-DEDUTIVA



A pesquisa segue a abordagem hipotético-dedutiva, que, segundo Marconi e Lakatos (2003, p. 106), “se inicia pela percepção de uma lacuna nos conhecimentos, acerca da qual formula hipóteses e, pelo processo de inferência dedutiva, testa a predição da ocorrência de fenômenos abrangidos pela hipótese”. Parte-se, portanto, de teorias e conhecimentos preexistentes sobre as relações entre SA e DRSAI, bem como sobre a influência de fatores contextuais, para formular hipóteses específicas sobre o contexto paranaense.

Essas hipóteses, detalhadas na seção 1.3, são então testadas empiricamente por meio da análise de dados observacionais, utilizando métodos estatísticos e técnicas de inferência causal. Os resultados obtidos são confrontados com as hipóteses iniciais, permitindo confirmar, refutar ou refinar as teorias existentes, contribuindo para o avanço do conhecimento na área.



MÉTODOS DE PROCEDIMENTO



Para alcançar os objetivos propostos, a pesquisa emprega dois métodos de procedimento principais: o estatístico e o comparativo. O método estatístico:



[...] significa reduzir os fenômenos sociológicos, políticos, econômicos etc., a termos quantitativos, manipulando-os estatisticamente, o que permite comprovar as relações dos fenômenos entre si, e obter generalizações sobre sua natureza, ocorrência ou significado (Marconi; Lakatos, 2003, p.108).



Neste estudo, o método estatístico é empregado para analisar a dinâmica histórica e as correlações entre indicadores de SA, DRSAI e fatores contextuais nos municípios paranaenses, utilizando técnicas como análise descritiva, análise exploratória de dados, correlações (Spearman, Kendall e Somers' D) e regressões múltiplas.

O método comparativo, por sua vez, é utilizado para a investigação de grupos, classes, fenômenos, fatos ou acontecimentos em geral, que se assemelham ou se diferenciam, por meio de comparação, no presente, passado ou entre presentes e passados (Marconi e Lakatos, 2003).

Neste estudo, o método comparativo é aplicado para examinar as diferenças e semelhanças entre os municípios paranaenses em relação aos indicadores de SA, DRSAI e fatores contextuais, buscando identificar padrões, regularidades e exceções. O método comparativo também é empregado para comparar os resultados obtidos no contexto paranaense com os achados da literatura científica em outros contextos, buscando generalizações e particularidades.



Delineamento da pesquisa



Esta pesquisa adota uma abordagem quantitativa, com delineamento longitudinal retrospectivo, utilizando dados secundários para investigar relações causais entre melhorias de Saneamento Ambiental e redução de Doenças Relacionadas ao Saneamento Ambiental Inadequado nos municípios paranaenses.

O desenho metodológico fundamenta-se no reconhecimento da complexidade inerente às relações entre SA e DRSAI, conforme discutido por Morçöl (2012), que caracteriza políticas públicas como sistemas dinâmicos complexos emergentes nos quais as relações entre elementos são não-lineares e coevolutivas.

A estratégia de investigação baseia-se na Escada da Causalidade proposta por Pearl e Mackenzie (2018), organizando os procedimentos metodológicos nos dois primeiros níveis hierárquicos que progridem da associação à identificação causal. Esta abordagem permite captar a complexidade das relações causais sem recorrer a métodos contrafactuais, mantendo foco na robustez metodológica dentro de um escopo exequível.



Marco teórico da inferência causal



Os procedimentos propostos neste projeto de tese incorporam os avanços contemporâneos na ciência da causalidade, buscando superar as limitações do "acorrelacionalismo" criticado por Pearl e Mackenzie (2018). Reconhecendo que a mera associação temporal não é suficiente para estabelecer causalidade, como exemplificado pela associação entre venda de sorvetes e crimes, ambos relacionados às temperaturas mais altas, a pesquisa emprega métodos de inferência causal específicos para dados observacionais.

A abordagem metodológica fundamenta-se no Modelo de Resultados Potenciais (Rubin Causal Model) e nas contribuições de Sewall Wright sobre diagramas causais, posteriormente formalizados como Directed Acyclic Graphs (DAGs). Esta base teórica permite distinguir entre observar uma variável e intervir sobre ela, formalização essencial para estabelecer relações causais em contextos em que experimentos randomizados não são viáveis.



TÉCNICAS DE PESQUISA



A pesquisa utiliza duas técnicas principais de coleta e análise de dados: a pesquisa bibliográfica e a pesquisa documental. A pesquisa bibliográfica, abrangendo a leitura, análise e interpretação de livros, periódicos, textos legais, mapas, fotos, manuscritos, entre outros, é utilizada para construir o referencial teórico da tese, revisando a literatura científica sobre SA, DRSAI, políticas públicas, teoria da complexidade, inferência causal e outros temas relevantes (Marconi e Lakatos, 2003).

A pesquisa bibliográfica também é utilizada para contextualizar o problema de pesquisa, identificar lacunas no conhecimento e formular as hipóteses. A pesquisa documental, por sua vez, vale-se de materiais que não receberam ainda um tratamento analítico, ou que podem ser reelaborados de acordo com os objetos da pesquisa (Marconi; Lakatos, 2003).

Neste estudo, a pesquisa documental é utilizada para coletar dados secundários sobre SA, DRSAI e fatores contextuais nos municípios paranaenses, a partir de fontes como o SNIS, o DATASUS, o Instituto Paranaense de Desenvolvimento Econômico e Social (IPARDES), Instituto Nacional de Meteorologia (INMET) e o Instituto Brasileiro de Geografia e Estatística (IBGE). 



UNIVERSO E AMOSTRA



O universo da pesquisa é composto pelos 399 municípios do estado do Paraná, abrangendo o período de 2008 a 2022. A escolha desse período se justifica pela disponibilidade de dados consistentes e comparáveis nas fontes utilizadas, por ser um período que abrange exatamente dois anos antes do início da década e termina dois anos depois, bem como pela relevância do período para a análise das políticas públicas de saneamento no estado. A pesquisa adota uma abordagem censitária, incluindo todos os municípios que apresentam dados disponíveis nas bases de dados consultadas. Não há, portanto, um processo de amostragem tradicional, uma vez que se busca analisar a totalidade do universo.

Essa abordagem, embora exija o tratamento de um grande volume de dados, permite uma análise mais completa e precisa da realidade paranaense, evitando vieses de seleção e garantindo a representatividade dos resultados. A pesquisa trabalhará com os indicadores disponíveis para cada um dos seguintes grupos de variáveis: indicadores de SA, indicadores de DRSAI e indicadores de contexto, especificamente tratando de temperatura do ar, precipitação anual, tamanho da população, PIB per capita, região administrativa e distância até a capital.



Fontes de dados e variáveis



As principais bases de dados utilizadas são o Sistema Nacional de Informações Sobre Saneamento (SNIS), o DATASUS, especificamente o Sistema de Informações Hospitalares (SIH) e o Sistema de Informação de Agravos de Notificação (SINAN), os dados socioeconômicos, demográficos e de Produto Interno Bruto dos municípios disponibilizados pelo IBGE, e os dados climáticos de precipitação, temperatura e umidade relativa do INMET.

As variáveis de saneamento são operacionalizadas através de indicadores que capturam diferentes dimensões da infraestrutura sanitária. O índice de atendimento de água tratada representa o percentual da população total atendida com abastecimento de água tratada, enquanto o índice de atendimento de esgoto coletado indica o percentual da população total atendida com esgotamento sanitário. Os investimentos per capita em saneamento são utilizados como variável instrumental para identificação causal.

As DRSAI são mensuradas através de indicadores específicos por doença e agregados, todos calculados como taxas de incidência por 100.000 habitantes. Os indicadores específicos incluem diarreia e gastroenterite, principais doenças de veiculação hídrica; dengue, doença vetorial relacionada a condições sanitárias; leptospirose, relacionada a enchentes e esgotamento inadequado; hanseníase, doença relacionada a condições sociossanitárias; e hepatite A, de transmissão feco-oral.

Para controlar a complexidade identificada por Santos (2006) e Varela (2022), que apontam múltiplos fatores determinantes na incidência de DRSAI, são incluídas variáveis de controle multidimensionais. As variáveis socioeconômicas incluem PIB per capita municipal, identificado por Santos (2006) como principal confundidor socioeconômico, além de taxa de urbanização e densidade demográfica.

As variáveis climáticas capturam a precipitação acumulada anual, considerando os efeitos sazonais identificados por Varela (2022) como fatores significativos na incidência de dengue e leptospirose. As variáveis geográficas incluem região administrativa do Paraná para controlar heterogeneidade espacial e a distância de cada município até a capital.



ESTRUTURA DO TRABALHO E ESCADA DA CAUSALIDADE



A metodologia organiza-se conforme os dois primeiros níveis da Escada da Causalidade, reconhecendo que sistemas complexos como as relações entre SA e DRSAI requerem abordagem progressiva que vai além de meras correlações, mas mantém foco em métodos causais estabelecidos e robustos.

O primeiro nível, da Associação, tem como objetivos identificar correlações temporais e espaciais entre SA e DRSAI, caracterizar padrões de distribuição geográfica e heterogeneidade regional, e detectar tendências temporais e consistência das associações. Este nível emprega análise exploratória de dados através de estatísticas descritivas por município e ano, análise de distribuições, identificação de outliers e padrões espaciais através de mapas coropléticos.

A análise de correlação utiliza correlações ordinais (Spearman, Kendall e Somers' D) que trabalham com a lógica ordinal, permitindo explorar o conceito de "melhor/pior" implícito no problema de pesquisa. Estas técnicas são complementadas por adaptações que permitem exploração de casos que fujam à regra esperada.

A análise de regressão com efeitos fixos segue o modelo:







Onde i representa município, t representa ano,  são os indicadores de saneamento,  são as variáveis de controle, μᵢ são efeitos fixos municipais e λₜ são efeitos fixos temporais.

É desenvolvido um método de análise posicional onde o município de maior valor escalar recebe índice 1, o de menor valor recebe índice 0, e os demais recebem valores condizentes com seu posicionamento no ranking, permitindo identificar se um município melhorou ou piorou sua posição relativa ao longo do tempo.

O segundo nível, da Intervenção Causal, tem como objetivos estimar efeitos causais de melhorias em SA sobre DRSAI, controlar para confundidores através de métodos quasi-experimentais, e quantificar a magnitude dos efeitos causais e sua moderação por renda municipal.

A principal estratégia de identificação causal é o Propensity Score Matching (PSM), técnica que cria grupos de tratamento e controle comparáveis baseados na probabilidade de receber tratamento. O método envolve cinco etapas: estimação do escore de propensão através de modelo logístico; verificação de suporte comum; pareamento por vizinhos mais próximos com caliper; verificação de balanceamento das covariáveis; e estimação do Average Treatment Effect (ATE).

O tratamento é definido como municípios que apresentaram melhorias substanciais em SA, com controles selecionados através de pareamento por características contextuais observáveis incluindo PIB per capita, densidade demográfica, região administrativa e características climáticas.

Complementarmente, é empregado o método Difference-in-Differences (DiD) que explora variação temporal em tratamentos para identificar efeitos causais. Utiliza-se uma adaptação da técnica para analisar se municípios que tiveram melhorias em indicadores de SA também apresentaram melhorias em indicadores de DRSAI, seguindo o modelo:







O evento de tratamento é identificado através de melhorias nos índices de saneamento, com análise de períodos pré e pós-tratamento. O método inclui testes de tendências paralelas e análises de estudos de caso para validação das suposições.



cONTROLE DE FATORES CONTEXTUAIS E VALIDAÇÃO



Reconhecendo a complexidade apontada por Santos (2006) e Varela (2022), onde fatores como nível educacional, renda familiar, chuvas sazonais, temperatura, umidade e densidade demográfica influenciam a incidência de DRSAI, a metodologia implementa estratégia de controle multidimensional. O controle temporal é realizado através de efeitos fixos anuais para controlar choques temporais comuns e sazonalidade das doenças relacionadas ao saneamento.

O controle espacial utiliza efeitos fixos municipais para características invariantes no tempo e controle por região administrativa para capturar heterogeneidade geográfica do Paraná. O controle socioeconômico emprega PIB per capita como principal confundidor socioeconômico, complementado por taxa de urbanização e densidade demográfica. O controle climático incorpora precipitação anual para capturar os efeitos das chuvas sazonais identificados por Varela (2022) como fatores significativos na incidência de dengue e leptospirose.

Os procedimentos de validação e robustez incluem múltiplas estratégias para garantir a confiabilidade das inferências causais. Os testes de robustez empregam especificações alternativas com diferentes formas funcionais e definições de tratamento, amostras alternativas através da exclusão de outliers e análise de subperíodos, e variáveis dependentes alternativas utilizando diferentes definições e agregações de DRSAI.

Os testes de falsificação aplicam os métodos em períodos em que não deveria haver efeito causal (placebo temporal) e analisam doenças não relacionadas ao saneamento (variáveis dependentes placebo). A análise de sensibilidade investiga confundidores não-observados através de análise de bounds para avaliar robustez a variáveis omitidas e examina violações de suposições através do relaxamento de suposições dos métodos causais.



iNTEGRAÇÃO METODOLÓGICA E PRODUTOS ESPERADOS



A progressão entre os dois níveis segue lógica cumulativa onde cada nível informa e valida o seguinte. As correlações e padrões identificados no primeiro nível orientam a especificação de modelos causais no segundo nível, incluindo definição de tratamentos e seleção de controles.

A validação cruzada entre PSM e DiD permite triangulação metodológica, com análise de moderação integrada em ambos os métodos. Os resultados dos dois níveis são sintetizados em discussão que considera consistência entre métodos, limitações da abordagem simplificada, e implicações práticas para políticas públicas.

Esta estrutura metodológica focada nos dois primeiros níveis da causalidade busca oferecer progressão lógica, rigor científico e relevância prática, produzindo evidência causal dentro de escopo exequível para orientar políticas públicas de saneamento no estado do Paraná.

A abordagem reconhece a complexidade inerente às relações causais sem comprometer a qualidade da inferência científica, oferecendo contribuições tanto para o avanço do conhecimento acadêmico quanto para a formulação de políticas baseadas em evidências.

Os produtos esperados incluem estimativas quantitativas dos efeitos causais do saneamento sobre a saúde, identificação de municípios e populações prioritárias para intervenções, e framework metodológico replicável para outros contextos regionais brasileiros.



cronograma



Legenda:

A1: Artigo 1

A2: Artigo 2

A3: Artigo 3

R: Revisão Bibliográfica Contínua

C: Coleta e Organização de Dados

An: Análise de Dados

E: Escrita e Revisão

D: Defesa







SUMÁRIO PROVISÓRIO

ELEMENTOS PRÉ-TEXTUAIS

1 INTRODUÇÃO

1.1 Problemas de Pesquisa 

1.2 Objetivos de Pesquisa 

1.3 Hipóteses de Pesquisa

1.4 Justificativa

2 REFERENCIAL TEÓRICO

2.1 O Desenvolvimento e o Desenvolvimento Regional

2.2 O Estudo Histórico das Relações SA e DRSAI 

2.3 As Múltiplas Relevâncias do SA

2.4 A Complexidade nas Relações de Causa e Efeito do SA sobre DRSAI 

2.5 A Investigação de Relações Causais

2.6 A Escada da Causalidade

3 PROCEDIMENTOS METODOLÓGICOS

3.1 Abordagem Hipotético-Dedutiva

3.2 Métodos de Procedimento 

3.3 Delineamento da Pesquisa 

3.4 Marco Teórico da Inferência Causal

3.5 Técnicas de Pesquisa

3.6 Universo e Amostra

3.7 Fontes de Dados e Variáveis

3.8 Estrutura do Trabalho e Escada da Causalidade

3.9 Controle de Fatores Contextuais e Validação

3.10 Integração Metodológica e Produtos Esperados 

4 DESENVOLVIMENTO

3.1 Nível de Associação

3.2 Nível de Intervenção

3.3 Controle e Validação

5 CONSIDERAÇÕES FINAIS

5.1 Síntese dos Resultados

5.2 Implicações para Políticas Públicas no Paraná

5.3 Limitações da Pesquisa

5.4 Sugestões para Pesquisas Futuras

REFERÊNCIAS BIBLIOGRÁFICAS

ELEMENTOS PÓS-TEXTUAIS





Resultados Preliminares



Até aqui, alguns processos iniciais já foram feitos, já sendo possível ter alguns resultados preliminares da análise descritiva da relação entre Saneamento Ambiental (SA) e Doenças Relacionadas ao Saneamento Ambiental Inadequado (DRSAI) em 474 municípios do Paraná e Mato Grosso do Sul, entre 2008 e 2021. O objetivo principal é explorar a correspondência entre os rankings de cobertura de SA (abastecimento de água e esgotamento sanitário) e de incidência de DRSAI (internações proporcionais por diarreia, dengue, hanseníase e leptospirose), além de analisar a dinâmica temporal desses indicadores.

 A análise utilizou dados secundários do SNIS e do DATASUS. Foram construídos rankings anuais para cada variável, atribuindo um índice posicional (0 a 1) a cada município, refletindo sua posição relativa. A partir desses índices, realizou-se duas análises principais: comparação das diferenças entre os índices de SA e DRSAI no mesmo ano e análise da dinâmica temporal dos índices ao longo dos anos. A correspondência entre os rankings foi avaliada por meio das diferenças entre os índices posicionais dos municípios nos rankings de SA e DRSAI, no mesmo ano. As Tabelas 1 a 8 apresentam as estatísticas descritivas dessas diferenças. Os resultados demonstram que não há coincidência perfeita entre os rankings. Em todos os anos e variáveis, há diferenças significativas, indicando que um bom desempenho em SA não garante, necessariamente, um bom desempenho em relação às DRSAI.

Há municípios com bom SA e alta DRSAI, e vice-versa. Apesar disso, em muitos casos, a mediana das diferenças se aproxima de 0.30 (positiva ou negativa), sugerindo uma tendência, embora não determinística, de que municípios com melhor SA apresentem menor DRSAI. As médias das diferenças são consistentemente próximas a zero, indicando ausência de viés sistemático. A intensidade da relação varia entre as diferentes DRSAI. A análise da dinâmica temporal dos índices posicionais, ao longo dos 14 anos, foi realizada através do cálculo do saldo (diferença entre o índice do último e primeiro ano), valores extremos (máximo e mínimo) e amplitude (diferença entre máximo e mínimo) e a média do índice durante a série. As Tabelas 9 a 13 apresentam as estatísticas descritivas dessas medidas. A Tabela 9 (Saldo) revela mobilidade considerável dos municípios nos rankings, maior nas DRSAI do que em SA.

As Tabelas 10 e 11 (Extremos) mostram que alguns municípios alcançaram posições muito altas em SA, enquanto outros nunca alcançaram posições elevadas em certas DRSAI. A Tabela 12 (Amplitude) indica estabilidade/instabilidade, com municípios apresentando trajetórias distintas. A Tabela 13 (Médias) mostra que, em geral, as médias se concentram em torno de 0.5, mas com casos de desempenho consistentemente superior ou inferior.



Tabelas de resultados preliminares



TABELA 1 – ESTATÍSTICAS DAS DIFERENÇAS ENTRE OS RANKINGS DE ÁGUA TRATADA E INTERNAÇÕES PROPORCIONAIS POR DIARRÉIA.



TABELA 2 – ESTATÍSTICAS DAS DIFERENÇAS ENTRE OS RANKINGS DE ÁGUA TRATADA E INTERNAÇÕES PROPORCIONAIS POR DENGUE



TABELA 3 – ESTATÍSTICAS DAS DIFERENÇAS ENTRE OS RANKINGS DE ÁGUA TRATADA E INTERNAÇÕES PROPORCIONAIS POR HANSENÍASE.



TABELA 4 – ESTATÍSTICAS DAS DIFERENÇAS ENTRE OS RANKINGS DE ÁGUA TRATADA E INTERNAÇÕES PROPORCIONAIS POR LEPTOSPIROSE.



TABELA 5 – ESTATÍSTICAS DAS DIFERENÇAS ENTRE OS RANKINGS DE COLETA DE ESGOTAMENTO SANITÁRIO E INTERNAÇÕES PROPORCIONAIS POR DIARREIA.



TABELA 6 – ESTATÍSTICAS DAS DIFERENÇAS ENTRE OS RANKINGS DE COLETA DE ESGOTAMENTO SANITÁRIO E INTERNAÇÕES PROPORCIONAIS POR DENGUE.



TABELA 7 – ESTATÍSTICAS DAS DIFERENÇAS ENTRE OS RANKINGS DE COLETA DE ESGOTAMENTO SANITÁRIO E INTERNAÇÕES PROPORCIONAIS POR HANSENÍASE.



TABELA 8 – ESTATÍSTICAS DAS DIFERENÇAS ENTRE OS RANKINGS DE COLETA DE ESGOTAMENTO SANITÁRIO TRATADA E INTERNAÇÕES PROPORCIONAIS POR LEPTOSPIROSE.



TABELA 9 – ESTATÍSTICAS DO SALDO.



TABELA 10 – ESTATÍSTICAS DOS VALORES MÁXIMOS.



TABELA 11 – ESTATÍSTICAS DOS VALORES MÍNIMOS.



TABELA 12 – E STATÍSTICAS DE AMPLITUDE.



TABELA 13 – ESTATÍSTICAS DAS MÉDIAS.



















REFERÊNCIAS



BACHSTEIN, Giselle Sacchelli. Análise do esgotamento sanitário no litoral do Paraná na perspectiva da (in) justiça ambiental: estudo de caso do município de Pontal do Paraná - PR. 2016. Dissertação (Mestrado) - Universidade Federal do Paraná, Curitiba, 2016.  Disponível em: https://hdl.handle.net/1884/60026. Acesso em: 18 fev. 2025.



BRASIL. Ministério das Cidades. Organização Pan-Americana da Saúde. Política e plano municipal de saneamento ambiental: experiências e recomendações. Organização Panamericana da Saúde; Ministério das Cidades, Programa de Modernização do Setor de Saneamento. Brasília: OPAS, 2005. 89p.



BRASIL. Fundação Nacional de Saúde. Impactos na saúde e no sistema único de saúde decorrentes de agravos relacionados a um saneamento ambiental inadequado. Brasília: Fundação Nacional de Saúde, 2010. 246 p.  Disponível em:  http://www.funasa.gov.br/site/wp-content/files_mf/estudosPesquisas_ImpactosSaude.pdf. Acesso em: 20 fev. 2025.



CAIRNEY, Paul. Complexity Theory in Political Science and Public Policy. Political Studies Review, [S. l.], v. 10, n. 3, p. 346-359, 2012. Disponível em: https://doi.org/10.1111/j.1478-9302.2012.00270.x. Acesso em: 22 jan. 2025.



CESA, Marcia de Vicente. Água e outros fatores socioambientais na ocorrência das doenças de veiculação hídrica na Ilha de Santa Catarina. 2012. Tese (Doutorado em Geografia) – Universidade Federal de Santa Catarina, Centro de Filosofia e Ciências Humanas, Programa de Pós-Graduação em Geografia, Florianópolis, 2012. Disponível em: http://repositorio.ufsc.br/handle/123456789/103397. Acesso em: 22 jan. 2025.



CILLIERS, Paul. Complexity and postmodernism. London: Routledge, 1998.  Disponível em: https://uberty.org/wp-content/uploads/2015/04/Paul-Cilliers-Complexity-and-Postmodernism-Understanding-Complex-Systems-1998.pdf. Acesso em: 21 fev. 2025.



COSTA, Kylvia Luciana Pereira. Saneamento e seu impacto na saúde coletiva: um estudo em comunidades rurais no Alto Sertão Paraibano. 2023. 68 f. Dissertação (Mestrado em Gestão e Sistemas Agroindustriais) – Universidade Federal de Campina Grande, Centro de Ciências e Tecnologia Agroalimentar, Pombal, 2023. Disponível em: http://dspace.sti.ufcg.edu.br:8080/jspui/handle/riufcg/39953. Acesso em: 20 mai. 2025.



DATASUS, Ministério da Saúde. Departamento de Informática do Sistema Único de Saúde. Morbidade Hospitalar do SUS (SIH/SUS). 2025. Disponível em:

https://datasus.saude.gov.br/acesso-a-informacao/morbidade-hospitalar-do-sus-sih-sus/. Acesso em: 19 fev. 2025.



DYE, Thomas R. Understanding public policy. 14th ed. Upper Saddle River: Pearson Education, 2013. ISBN 978-0-205-23882-8.



FENWICK, Crystal et al. Overview and meta-analysis of global water, sanitation, and hygiene impact evaluations. World Bank, Washington, DC, 2018. (Policy Research Working Paper, n. 8444). Disponível em: http://hdl.handle.net/10986/29856. Acesso em: 22 jan. 2025.



FROSINI, Benito V. Causality and Causal Models: A Conceptual Perspective.  International Statistical Review, [S. l.], v. 74, n. 3, p. 305-334, Dec. 2006. DOI: 10.1111/j.1751-5823.2006.tb00298.x.



GRANGER, C. W. J. Investigating Causal Relations by Econometric Models and Cross-spectral Methods. Econometrica, [S. l.], v. 37, n. 3, p. 424-438, ago. 1969. DOI: 10.2307/1912791.  Disponível em: https://doi.org/10.2307/1912791. Acesso em: 18 fev. 2025.



HERNAN, Miguel A.; ROBINS, James M. Causal inference: what if. 1st ed. London: CRC Press, 2024. 312 p.



INSTITUTO DE PESQUISA ECONÔMICA APLICADA. Agenda 2030: objetivos de desenvolvimento sustentável: avaliação do progresso das principais metas globais para o Brasil: ODS 6: assegurar a disponibilidade e a gestão sustentável da água e do saneamento para todas e todos. Brasília: Ipea, 2024. 19 p. (Cadernos ODS, 6). DOI: http://dx.doi.org/10.38116/ri2024ODS6 Disponível em:https://repositorio.ipea.gov.br/bitstream/11058/14124/6/Agenda_2030_ODS_6_Assegurar_a_disponibilidade_e_a_gestao.pdf. Acesso em: 28 out. 2025.



JANNUZZI, Paulo de Martino. Indicadores para diagnóstico, monitoramento e avaliação de programas sociais no Brasil. Revista do Serviço Público - RSP, Brasília, v. 56, n. 2, p. 137-160, abr.-2005.  Disponível em: http://repositorio.enap.gov.br/handle/1/1489. Acesso em: 15 fev. 2025.



JANNUZZI, Paulo de Martino. Indicadores Sociais no Brasil: conceitos, fontes de dados e aplicações. 6. ed. Campinas: Alínea, 2017.



LOSEE, John (Ed.). Theories of causality from antiquity to the present. 1st ed. London: Routledge, 2017. 218 p.



MALDONADO, Maira; ANTÚNEZ ARAQUE, Héctor Alí. Desarrollo Humano Sustentable: Una mirada en el devenir de las teorías de integración del desarrollo económico. Sustentabilidad Al día, n. 9, nov. 2023. DOI: 10.70219/sad-92023-180. 

Disponível em: https://revistas.uv.cl/index.php/SustentabilidadAlDia/article/view/3668. 

Acesso em: 28 out. 2025.



MARCONI, Marina de Andrade; LAKATOS, Eva Maria. Fundamentos de metodologia científica. 5. ed. São Paulo: Atlas, 2003. 314 p.



MARTINS, Getúlio. Impacto do saneamento básico na saúde pública: estudo de caso - Itapetininga, SP - 1980 a 1997. 2001. Tese (Doutorado) – Universidade de São Paulo, São Paulo, 2001. Disponível em: http://www.teses.usp.br/teses/disponiveis/6/6134/tde-30032020-114334/. Acesso em: 22 jan. 2025.



MATTA, Luiz Gustavo da; VERDAN, Mariana Fernandes. Construção histórica do 

conceito de desenvolvimento e suas múltiplas abordagens. Observatório de la 

Economía Latinoamericana, v. 21, n. 11, p. 18853-18875, 2023. 

DOI: 10.55905/oelv21n11-0. Disponível em: https://ojs.observatoriolatinoamericano.com/ojs/index.php/olel/article/view/1476. 

Acesso em: 28 out. 2025.



MENDONÇA, Mário Jorge Cardoso de; MOTTA, Ronaldo Seroa da. Saúde e saneamento no Brasil. Planejamento e Políticas Públicas, Brasília, n. 30, 2007. Disponível em: https://www.ipea.gov.br/ppp/index.php/PPP/article/view/33. Acesso em: 22 jan. 2025.



MESQUITA, Tayane Cristiele Rodrigues. Análise da relação saúde, saneamento e ambiente nas epidemias do Zika vírus e microcefalia no Brasil. 2023. 157 f. Tese (Doutorado em Engenharia Agrícola) - Universidade Federal de Viçosa, Departamento de Engenharia Agrícola, Viçosa, 2023. DOI: 10.47328/ufvbbt.2023.261.  Disponível em: https://locus.ufv.br//handle/123456789/31594. Acesso em: 18 fev. 2025.



MORÇÖL, Göktuğ. A complexity theory for public policy. New York: Routledge, 2012. ISBN 978-0-415-51827-7.



ORGILL-MEYER, Jennifer; PATTANAYAK, Subhrendu K. Improved sanitation increases long-term cognitive test scores. Duke Global Working Paper Series, n. 2019/07, 2019. Disponível em: https://ssrn.com/abstract=3418412. Acesso em: 22 jan. 2025.



PASTRE, Fauston. Indicadores do esgotamento sanitário de Medianeira/PR frente aos desafios do novo marco legal do saneamento básico. 2023. 149 f. Dissertação (Mestrado Profissional em Tecnologias, Gestão e Sustentabilidade) - Universidade Estadual do Oeste do Paraná, Centro de Engenharias e Ciências Exatas, Foz do Iguaçu, 2023.  Disponível em: https://tede.unioeste.br/handle/tede/7168. Acesso em: 18 fev. 2025.



PEARL, Judea; MACKENZIE, Dana. The book of why: the new science of cause and effect.  New York: Basic Books, 2018.



PEARSON, Joanna; MCPHEDRAN, Kate. A literature review of the non-health impacts of sanitation. Waterlines, v. 27, n. 1, p. 48-61, jan. 2008. Disponível em: https://www.jstor.org/stable/24684955. Acesso em: 22 jan. 2025.



PIRES, Clleo Gonçalves da Silva. Impacto socioeconômico do saneamento no Brasil. 2022. Dissertação (Mestrado) – Fundação Getulio Vargas, Rio de Janeiro, 2022. Disponível em: https://hdl.handle.net/10438/34548. Acesso em: 22 jan. 2025.



RAMOS, Juan David Huertas. La planeación del desarrollo a través de la historia: 

de los conceptos a la técnica. Administración & Desarrollo, v. 47, n. 2, 

p. 10-22, dez. 2017. DOI: 10.22431/25005227.95. Disponível em: 

https://revistas.esap.edu.co/index.php/admindesarro/article/view/95. 

Acesso em: 28 out. 2025.



SANEPAR. Transparência Sanepar. [Plano de Trabalho relacionado ao Convênio de 17 de dezembro de 2020].  Disponível em: https://transparencia.sanepar.com.br/node/714. Acesso em: 23 fev. 2025.



SANTOS, Lucimar Augusto dos. A falta de saneamento é o principal responsável pelos índices de Doença de Veiculação Hídrica? Um estudo das populações que habitam as margens de igarapés em Manaus, AM. 2006. Dissertação (Mestrado em Ciências do Ambiente e Sustentabilidade na Amazônia) – Universidade Federal do Amazonas, Manaus, 2006. Disponível em: http://tede.ufam.edu.br/handle/tede/2612. Acesso em: 22 jan. 2025.



SAAVEDRA, Óscar Cuellar; ARMELLA, Florita Moreno. Del crecimiento económico al desarrollo humano: Los cambiantes usos del concepto de desarrollo en América Latina, 1950-2000. Sociológica (México), v. 24, n. 70, p. 83-114, 2009. 

ISSN 2007-8358. Disponível em: http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0187-01732009000200004. Acesso em: 28 out. 2025.



SCRIPTORE, Juliana Souza. Impactos do saneamento sobre saúde e educação: uma análise espacial. 2016. Tese (Doutorado) – Universidade de São Paulo, São Paulo, 2016. Disponível em: http://www.teses.usp.br/teses/disponiveis/12/12138/tde-02082016-165540/. Acesso em: 22 jan. 2025.



SECCHI, Leonardo. Análise de políticas públicas: diagnóstico de problemas, recomendação de soluções. 1. ed. São Paulo: Cengage Learning, 2020. Livro digital. ISBN 978-65-555-8241-3.



SOUZA, Celina; FONTANELLI, Flavio. Capacidade estatal e burocrática: sobre conceitos, dimensões e medidas. In: MELLO, Janine et al. (Org.). Implementação de políticas e atuação de gestores públicos: experiências recentes das políticas das desigualdades. Brasília: Instituto de Pesquisa Econômica Aplicada (Ipea), 2020. Disponível em: http://www.ipea.gov.br/portal/publicacoes. Acesso em: 22 jan. 2025.



SNIS. Sistema Nacional de Informações sobre Saneamento. 2025. Disponível em: <

https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/saneamento/snis/produtos-do-snis/painel-de-informacoes>. Acesso em: 19 fev. 2025.



SNOW, John. Cholera and the Water Supply in the South Districts of London in 1854. J Public Health Sanit Rev, Londres, v. 2, n. 7, p. 239–257, out. 1856.  Disponível em: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6004154/. Acesso em: 15 fev. 2025.



THAL, Dan R.C.; FINUCANE, Mariel M. Causal Methods Madness: Lessons Learned from the 2022 ACIC Competition to Estimate Health Policy Impacts.  Observational Studies,  [S. l.], v. 9, n. 3, p. 3-27, 2023. DOI: 10.1353/obs.2023.0023.



VARELA, Andrew Wallace Palheta. Inter-relações entre variáveis ambientais e doenças de veiculação hídrica no Município de Belém-Pa. 2022. Dissertação (Mestrado em Engenharia Civil) – Universidade Federal do Pará, Belém, 2022. Disponível em: https://repositorio.ufpa.br/jspui/handle/2011/15687. Acesso em: 22 jan. 2025.



WOLFART, Gracieli Aparecida. Saneamento básico como fator de desenvolvimento: um estudo da mortalidade infantil e da infância no Estado do Paraná. 2014. Dissertação (Mestrado em Desenvolvimento Regional e Agronegócio) - Universidade Estadual do Oeste do Paraná, Toledo, 2014. Disponível em: https://tede.unioeste.br/handle/tede/2165. Acesso em: 18 fev. 2025.

|  |
| Ficha catalográfica para trabalhos acadêmicos [Elemento obrigatório.]

[Insira neste espaço a ficha catalográfica para trabalhos acadêmicos.]

[A ficha é elaborada pelo(a) autor(a)]

 |
|  |
|  |
|  |
|  |
|  |

| Período | Atividades Principais |
| Nov/2025-Jan/2026 (T1) | C: Finalização da coleta e organização de todos os dados (SNIS, DATASUS, etc.). An: análise descritiva e exploratória dos dados para o capítulo do primeiro nível. E: Escrita da primeira versão completa do capítulo do primeiro nível. |
| Fev-Abr/2026 (T2) | An: Produção do código de análise do segundo nível para o caso específico da tese. E: Relato e descrição do processo de desenvolvimento do código do segundo nível. |
| Mai-Jul/2026 (T3) | An: Aplicação completa dos dados na versão final do código de aplicação do segundo nível E: Relato e descrição do processo e resultados da aplicação do código aos dados para o segundo nível. |
| Ago-Out/2026 (T4) | E: Revisão dos resultados encontrados nos dois níveis e conclusão a respeito dos resultados encontrados frente às perguntas e objetivos de pesquisa E: Revisão dos orientadores a respeito do texto produzido. |
| Nov-Dez/2026 (T5) | E: Finalização da tese e extração de um artigo de divulgação do processo metodológico e um artigo de divulgação dos resultados encontrados. D: Preparação para a defesa e defesa da tese. |

| Ano | Média | Mediana | Moda | Máxima | 75% | 50% | 25% | Mínima |
| 2008 | -3.7E-18 | -0.81818 | 0.002114 | 0.885835 | 0.331395 | 0.002114 | -0.32162 | -0.81818 |
| 2009 | 1.17E-19 | -0.8277 | 0.027484 | 0.894292 | 0.346723 | 0.027484 | -0.32347 | -0.8277 |
| 2010 | -1.2E-17 | -0.85412 | 0 | 0.960888 | 0.337738 | 0 | -0.3129 | -0.85412 |
| 2011 | 1.03E-17 | -0.84989 | 0.029598 | 0.900634 | 0.335624 | 0.029598 | -0.33166 | -0.84989 |
| 2012 | 0.000812 | 0.058954 | 0.038015 | 0.941865 | 0.325352 | 0.038015 | -0.30245 | -0.87551 |
| 2013 | 0.000783 | 0.073724 | -0.00158 | 0.938703 | 0.323981 | -0.00158 | -0.29862 | -0.86179 |
| 2014 | 0.000788 | 0.065271 | 0.016476 | 0.93447 | 0.286615 | 0.016476 | -0.29067 | -0.87025 |
| 2015 | 0.000801 | -0.87129 | 0.038423 | 0.96199 | 0.293957 | 0.038423 | -0.27457 | -0.87129 |
| 2016 | 0.00087 | 0.065354 | 0.034166 | 0.969362 | 0.279693 | 0.034166 | -0.30334 | -0.88496 |
| 2017 | 0.000872 | -0.90399 | 0.020872 | 0.971477 | 0.298705 | 0.020872 | -0.32589 | -0.90399 |
| 2018 | 0.000843 | 0.075898 | 0.036844 | 0.937712 | 0.285528 | 0.036844 | -0.29137 | -0.89345 |
| 2019 | 0.000888 | 0.059029 | 0.019063 | 0.967257 | 0.287503 | 0.019063 | -0.29295 | -0.91666 |
| 2020 | 0.000815 | 0.090668 | 0.013811 | 0.970415 | 0.296003 | 0.013811 | -0.28518 | -0.88185 |
| 2021 | 0.00077 | 0.10648 | 0.02332 | 0.96513 | 0.304576 | 0.02332 | -0.29363 | -0.86392 |

| Ano | Média | Mediana | Moda | Máxima | 75% | 50% | 25% | Mínima |
| 2008 | -5.62138E-18 | -0.58034 | -0.0407 | 0.953488 | 0.277484 | -0.0407 | -0.33774 | -0.58034 |
| 2009 | -1.12428E-17 | -0.59408 | -0.06342 | 0.921776 | 0.28277 | -0.06342 | -0.33457 | -0.59408 |
| 2010 | -5.05924E-17 | -0.74101 | -0.01744 | 0.871036 | 0.35518 | -0.01744 | -0.37685 | -0.74101 |
| 2011 | -1.68641E-17 | 0.238901 | -0.04334 | 0.951374 | 0.375793 | -0.04334 | -0.37791 | -0.70719 |
| 2012 | 0.000356068 | 0.275198 | -0.03182 | 0.935536 | 0.275198 | -0.03182 | -0.35324 | -0.65926 |
| 2013 | 0.000614218 | 0.153892 | 0.00415 | 0.938703 | 0.382867 | 0.00415 | -0.36289 | -0.78163 |
| 2014 | 0.00047179 | 0.215061 | -0.02543 | 0.93447 | 0.333245 | -0.02543 | -0.37003 | -0.71306 |
| 2015 | 0.000663177 | -0.80589 | 0.03132 | 0.951441 | 0.35101 | 0.03132 | -0.34817 | -0.80589 |
| 2016 | 0.000645374 | 0.171894 | 0.000937 | 0.941936 | 0.33149 | 0.000937 | -0.31817 | -0.78899 |
| 2017 | 0.000427282 | 0.277384 | -0.0186 | 0.965148 | 0.277384 | -0.0186 | -0.3426 | -0.69302 |
| 2018 | 0.000318236 | 0.324843 | 0.001376 | 0.927164 | 0.259833 | 0.001376 | -0.32262 | -0.6445 |
| 2019 | -0.000324912 | 0.185612 | 0.005908 | 0.960928 | 0.349637 | 0.005908 | -0.3387 | -0.79008 |
| 2020 | 0.000765547 | -0.04786 | 0.024023 | 0.968305 | 0.348683 | 0.024023 | -0.34596 | -0.86287 |
| 2021 | -0.000618669 | 0.278421 | -0.01968 | 0.969349 | 0.278421 | -0.01968 | -0.32042 | -0.69198 |

| Ano | Média | Mediana | Moda | Máxima | 75% | 50% | 25% | Mínima |
| 2008 | -2.4E-17 | -0.5518 | -0.03383 | 0.957717 | 0.247886 | -0.03383 | -0.31342 | -0.5518 |
| 2009 | 1.87E-18 | -0.57188 | -0.02378 | 0.919662 | 0.248943 | -0.02378 | -0.30603 | -0.57188 |
| 2010 | 4.45E-17 | -0.57928 | -0.01586 | 0.882664 | 0.263742 | -0.01586 | -0.31237 | -0.57928 |
| 2011 | -3.7E-18 | -0.59725 | -0.03805 | 0.947146 | 0.244715 | -0.03805 | -0.32452 | -0.59725 |
| 2012 | 0.000292 | 0.305789 | -0.03839 | 0.933426 | 0.305789 | -0.03839 | -0.31842 | -0.62867 |
| 2013 | 0.000307 | 0.299462 | -0.01489 | 0.938703 | 0.299462 | -0.01489 | -0.33003 | -0.63606 |
| 2014 | 0.000343 | 0.276242 | -0.01763 | 0.93236 | 0.276242 | -0.01763 | -0.32365 | -0.65928 |
| 2015 | 0.000374 | 0.305871 | 0.011958 | 0.932369 | 0.273102 | 0.011958 | -0.29561 | -0.66876 |
| 2016 | 0.000516 | 0.233076 | 0.007518 | 0.895523 | 0.279226 | 0.007518 | -0.29652 | -0.73838 |
| 2017 | 0.000403 | 0.288987 | 0.00477 | 0.941941 | 0.241944 | 0.00477 | -0.29241 | -0.68141 |
| 2018 | 0.000305 | 0.331172 | 0.011908 | 0.963029 | 0.227578 | 0.011908 | -0.29938 | -0.63817 |
| 2019 | 0.000265 | 0.354388 | -0.00404 | 0.963038 | 0.23758 | -0.00404 | -0.30946 | -0.6213 |
| 2020 | -0.00097 | 0.361765 | -0.01244 | 0.961976 | 0.223287 | -0.01244 | -0.30578 | -0.61498 |
| 2021 | -0.00099 | 0.377577 | 0.003369 | 0.96302 | 0.223771 | 0.003369 | -0.28046 | -0.59282 |

| Ano | Média | Mediana | Moda | Máxima | 75% | 50% | 25% | Mínima |
| 2008 | -7.5E-18 | -0.50846 | -0.01797 | 0.989429 | 0.237844 | -0.01797 | -0.28488 | -0.50846 |
| 2009 | -1.9E-18 | -0.53171 | -0.01374 | 0.961945 | 0.244715 | -0.01374 | -0.27854 | -0.53171 |
| 2010 | -6.7E-17 | 0.440803 | -0.02008 | 0.965116 | 0.238372 | -0.02008 | -0.27431 | -0.53066 |
| 2011 | -1.5E-17 | 0.409091 | -0.00211 | 0.89852 | 0.241543 | -0.00211 | -0.28171 | -0.537 |
| 2012 | 0.000109 | 0.392287 | -0.01363 | 0.920768 | 0.238481 | -0.01363 | -0.27632 | -0.54217 |
| 2013 | 0.0001 | 0.397563 | -0.01364 | 0.932373 | 0.240587 | -0.01364 | -0.28267 | -0.53795 |
| 2014 | 0.000105 | 0.389111 | -0.00941 | 0.881727 | 0.244819 | -0.00941 | -0.27844 | -0.54641 |
| 2015 | 0.000165 | 0.405028 | -0.01675 | 0.968319 | 0.243823 | -0.01675 | -0.29423 | -0.5696 |
| 2016 | 0.000162 | 0.400797 | -0.00724 | 0.973582 | 0.234307 | -0.00724 | -0.27838 | -0.57066 |
| 2017 | 0.000138 | 0.414515 | -0.02312 | 0.963038 | 0.243796 | -0.02312 | -0.29426 | -0.55589 |
| 2018 | 0.000134 | 0.412396 | -0.00572 | 0.908177 | 0.24802 | -0.00572 | -0.29426 | -0.55695 |
| 2019 | 0.000165 | 0.401856 | 0.001751 | 0.842785 | 0.235366 | 0.001751 | -0.26463 | -0.57383 |
| 2020 | 0.000107 | 0.426111 | -0.00835 | 0.959867 | 0.232129 | -0.00835 | -0.26892 | -0.55063 |
| 2021 | 0.0001 | 0.42399 | -0.00624 | 0.950362 | 0.238472 | -0.00624 | -0.27844 | -0.54641 |

| Ano | Média | Mediana | Moda | Máxima | 75% | 50% | 25% | Mínima |
| 2008 | -3.7E-17 | -0.56131 | 0.01797 | 0.921776 | 0.263742 | 0.01797 | -0.28805 | -0.56131 |
| 2009 | -4.7E-18 | -0.56342 | 0.033827 | 0.951374 | 0.274577 | 0.033827 | -0.31237 | -0.56342 |
| 2010 | 1.22E-17 | -0.59302 | 0.019556 | 0.92389 | 0.271142 | 0.019556 | -0.30074 | -0.59302 |
| 2011 | 1.41E-18 | -0.60148 | 0.014799 | 0.938689 | 0.26797 | 0.014799 | -0.3166 | -0.60148 |
| 2012 | 0.000812 | -0.62709 | 0.040806 | 0.942984 | 0.256695 | 0.040806 | -0.28804 | -0.62709 |
| 2013 | 0.000783 | -0.61655 | 0.019525 | 0.961963 | 0.291651 | 0.019525 | -0.28771 | -0.61655 |
| 2014 | 0.000788 | -0.62712 | -0.00267 | 0.964086 | 0.280455 | -0.00267 | -0.29326 | -0.62712 |
| 2015 | 0.000801 | -0.6345 | 0.018804 | 0.936602 | 0.277829 | 0.018804 | -0.29431 | -0.6345 |
| 2016 | 0.00087 | -0.67566 | 0.026871 | 0.92604 | 0.262966 | 0.026871 | -0.27693 | -0.67566 |
| 2017 | 0.000872 | -0.68412 | 0.007948 | 0.902797 | 0.261309 | 0.007948 | -0.26591 | -0.68412 |
| 2018 | 0.000843 | -0.68097 | 0.031933 | 0.913333 | 0.257368 | 0.031933 | -0.268 | -0.68097 |
| 2019 | 0.000888 | -0.71793 | 0.015196 | 0.909149 | 0.244267 | 0.015196 | -0.25645 | -0.71793 |
| 2020 | 0.000815 | -0.69792 | -0.00673 | 0.934479 | 0.254078 | -0.00673 | -0.23694 | -0.69792 |
| 2021 | 0.00077 | -0.67576 | 0.040263 | 0.919688 | 0.276178 | 0.040263 | -0.25322 | -0.67576 |

| Ano | Média | Mediana | Moda | Máxima | 75% | 50% | 25% | Mínima |
| 2008 | -3.7E-17 | -0.32347 | -0.01586 | 0.89852 | 0.251586 | -0.01586 | -0.32347 | -0.32347 |
| 2009 | -1.2E-17 | -0.32981 | 0.005285 | 0.947146 | 0.244186 | 0.005285 | -0.32981 | -0.32981 |
| 2010 | -2.9E-17 | -0.47992 | 0.003171 | 0.894292 | 0.264535 | 0.003171 | -0.47992 | -0.47992 |
| 2011 | -1.9E-17 | -0.45877 | -0.00423 | 0.951374 | 0.270613 | -0.00423 | -0.45877 | -0.45877 |
| 2012 | 0.000356 | -0.41085 | 0.019986 | 0.92819 | 0.242977 | 0.019986 | -0.41085 | -0.41085 |
| 2013 | 0.000614 | -0.53638 | 0.018586 | 0.909207 | 0.284235 | 0.018586 | -0.47216 | -0.53638 |
| 2014 | 0.000472 | -0.47733 | 0.001552 | 0.947244 | 0.231443 | 0.001552 | -0.47733 | -0.47733 |
| 2015 | 0.000663 | -0.5691 | 0.014063 | 0.932458 | 0.289051 | 0.014063 | -0.2815 | -0.5691 |
| 2016 | 0.000645 | -0.56912 | 0.019819 | 0.879609 | 0.320315 | 0.019819 | -0.28152 | -0.56912 |
| 2017 | 0.000427 | -0.47314 | 0.02157 | 0.935652 | 0.285414 | 0.02157 | -0.47314 | -0.47314 |
| 2018 | 0.000318 | -0.43203 | 0.026746 | 0.930241 | 0.259833 | 0.026746 | -0.43203 | -0.43203 |
| 2019 | -0.00032 | -0.59134 | 0.024811 | 0.935652 | 0.320302 | 0.024811 | -0.30276 | -0.59134 |
| 2020 | 0.000766 | -0.67471 | 0.018006 | 0.929323 | 0.276737 | 0.018006 | -0.30862 | -0.67471 |
| 2021 | -0.00062 | -0.50382 | 0.008865 | 0.909118 | 0.252062 | 0.008865 | -0.50382 | -0.50382 |

| Ano | Média | Mediana | Moda | Máxima | 75% | 50% | 25% | Mínima |
| 2008 | -6E-17 | -0.29493 | -0.29493 | 0.911205 | 0.251321 | -0.29493 | -0.29493 | -0.29493 |
| 2009 | -1.5E-17 | -0.30761 | -0.02114 | 0.970402 | 0.249207 | -0.02114 | -0.30761 | -0.30761 |
| 2010 | 4.78E-17 | -0.31818 | -0.03911 | 0.936575 | 0.246829 | -0.03911 | -0.31818 | -0.31818 |
| 2011 | 1.87E-18 | -0.34884 | -0.02431 | 0.957717 | 0.247357 | -0.02431 | -0.34884 | -0.34884 |
| 2012 | 0.000292 | -0.38026 | -0.01556 | 0.953497 | 0.234194 | -0.01556 | -0.38026 | -0.38026 |
| 2013 | 0.000307 | -0.39081 | -0.01661 | 0.953524 | 0.245862 | -0.01661 | -0.39081 | -0.39081 |
| 2014 | 0.000343 | -0.41615 | -0.01013 | 0.938761 | 0.261817 | -0.01013 | -0.41615 | -0.41615 |
| 2015 | 0.000374 | -0.43197 | -0.01064 | 0.92604 | 0.280364 | -0.01064 | -0.43197 | -0.43197 |
| 2016 | 0.000516 | -0.50794 | 0.015821 | 0.864725 | 0.36753 | 0.015821 | -0.50794 | -0.50794 |
| 2017 | 0.000403  | -0.46154 | 0.007803 | 0.921803 | 0.310773 | 0.007803 | -0.46154 | -0.46154 |
| 2018 | 0.000305 | -0.4257 | -0.00754 | 0.904889 | 0.301112 | -0.00754 | -0.4257 | -0.4257 |
| 2019 | 0.000265 | -0.42257 | -0.01348 | 0.975736 | 0.268236 | -0.01348 | -0.42257 | -0.42257 |
| 2020 | -0.00097 | -0.42682 | -0.01773 | 0.907048 | 0.249186 | -0.01773 | -0.42682 | -0.42682 |
| 2021 | -0.00099 | -0.40466 | -0.00297 | 0.910331 | 0.272397 | -0.00297 | -0.40466 | -0.40466 |

| Ano | Média | Mediana | Moda | Máxima | 75% | 50% | 25% | Mínima |
| 2008 | -3.3E-17 | -0.25159 | -0.25159 | 0.980973 | 0.244715 | -0.25159 | -0.25159 | -0.25159 |
| 2009 | -1.2E-17 | -0.26744 | -0.26744 | 0.970402 | 0.254493 | -0.26744 | -0.26744 | -0.26744 |
| 2010 | -4.6E-17 | -0.26956 | -0.26956 | 0.943975 | 0.248943 | -0.26956 | -0.26956 | -0.26956 |
| 2011 | -2.8E-17 | -0.28858 | -0.15222 | 0.921776 | 0.238636 | -0.15222 | -0.28858 | -0.28858 |
| 2012 | 0.000109 | -0.29376 | -0.01786 | 0.933542 | 0.236367 | -0.01786 | -0.29376 | -0.29376 |
| 2013 | 0.0001 | -0.29271 | -0.02421 | 0.985228 | 0.23213 | -0.02421 | -0.29271 | -0.29271 |
| 2014 | 0.000105 | -0.30328 | -0.00941 | 0.924046 | 0.234493 | -0.00941 | -0.30328 | -0.30328 |
| 2015 | 0.000165 | -0.33282 | -0.02098 | 0.933533 | 0.230244 | -0.02098 | -0.33282 | -0.33282 |
| 2016 | 0.000162 | -0.34022 | -0.02098 | 0.983118 | 0.22423 | -0.02098 | -0.34022 | -0.34022 |
| 2017 | 0.000138 | -0.33601 | -0.02417 | 0.930349 | 0.223151 | -0.02417 | -0.33601 | -0.33601 |
| 2018 | 0.000134 | -0.34448 | -0.01044 | 0.917681 | 0.224235 | -0.01044 | -0.34448 | -0.34448 |
| 2019 | 0.000165 | -0.3751 | -0.00089 | 0.871237 | 0.229023 | -0.00089 | -0.3751 | -0.3751 |
| 2020 | 0.000107 | -0.36247 | -0.01786 | 0.909238 | 0.24165 | -0.01786 | -0.36247 | -0.36247 |
| 2021 | 0.0001 | -0.35825 | -0.01576 | 0.975732 | 0.238472 | -0.01576 | -0.35825 | -0.35825 |

| Ranking | Média | Mediana | Moda | Máxima | 75% | 50% | 25% | Mínima |
| Água tratada | 0 | 0.0011 | 0.9345 | 0.9345 | 0.1501 | 0.0011 | -0.1411 | -0.7738 |
| Coleta de esgotamento sanitário | 0 | -0.1047 | -0.1047 | 0.703 | 0.0666 | -0.1047 | -0.1047 | -0.3002 |
| Diarreia | -0.0008 | 0.0098 | 0.0098 | 0.8523 | 0.2209 | 0.0098 | -0.2349 | -0.8341 |
| Dengue | -0.0004 | 0.0757 | 0.0757 | 0.6909 | 0.0757 | 0.0757 | -0.0372 | -0.6152 |
| Hanseníase | -0.0003 | 0.0051 | 0.0051 | 0.5918 | 0.0051 | 0.0051 | 0.0051 | -0.6065 |
| Leptospirose | -0.0001 | 0.002 | 0.002 | 0.5475 | 0.002 | 0.002 | 0.002 | -0.5455 |

| Ranking | Média | Mediana | Moda | Máxima | 75% | 50% | 25% | Mínima |
| Água tratada | 0.6702 | 0.7526 | 0.945 | 1 | 0.945 | 0.7526 | 0.4397 | 0.0761 |
| Coleta de esgotamento
Sanitário | 0.5986 | 0.629 | 0.2939 | 1 | 0.8499 | 0.629 | 0.2939 | 0.2939 |
| Diarreia | 0.7676 | 0.8734 | 0.9209 | 0.9209 | 0.9124 | 0.8734 | 0.693 | 0.0106 |
| Dengue | 0.7636 | 0.8059 | 0.8629 | 0.8629 | 0.8629 | 0.8059 | 0.7236 | 0.0105 |
| Hanseníase | 0.6994 | 0.7447 | 0.7447 | 0.7447 | 0.7447 | 0.7447 | 0.6772 | 0.0105 |
| Leptospirose | 0.5718 | 0.5781 | 0.5781 | 0.5781 | 0.5781 | 0.5781 | 0.5781 | 0.0949 |

| Ranking | Média | Mediana | Moda | Máxima | 75% | 50% | 25% | Mínima |
| Água tratada | 0.34 | 0.296 | 0.037 | 0.9218 | 0.5418 | 0.296 | 0.121 | 0 |
| Coleta de esgotamento sanitário | 0.4027 | 0.2458 | 0.1882 | 0.9767 | 0.6295 | 0.2458 | 0.1882 | 0.1882 |
| Diarreia | 0.2461 | 0.2004 | 0 | 0.865 | 0.3787 | 0.2004 | 0.0897 | 0 |
| Dengue | 0.2065 | 0.1142 | 0.6078 | 0.6078 | 0.3369 | 0.1142 | 0.0443 | 0 |
| Hanseníase | 0.1656 | 0.0844 | 0.5856 | 0.5856 | 0.1605 | 0.0844 | 0.0359 | 0 |
| Leptospirose | 0.2741 | 0.0886 | 0.5412 | 0.5475 | 0.5412 | 0.0886 | 0.0275 | 0 |

| Ranking | Média | Mediana | Moda | Máxima | 75% | 50% | 25% | Mínima |
| Água tratada | 0.3302 | 0.2674 | 0.0803 | 0.9789 | 0.4334 | 0.2674 | 0.1461 | 0.0381 |
| Coleta de esgotamento sanitário | 0.1959 | 0.1057 | 0.1057 | 0.8097 | 0.2299 | 0.1057 | 0.1057 | 0.0169 |
| Diarreia | 0.5215 | 0.5246 | 0.0794 | 0.9061 | 0.7113 | 0.5246 | 0.3646 | 0.0085 |
| Dengue | 0.5571 | 0.6129 | 0.255 | 0.8608 | 0.6995 | 0.6129 | 0.4072 | 0.0105 |
| Hanseníase | 0.5338 | 0.6097 | 0.1591 | 0.7447 | 0.6709 | 0.6097 | 0.4889 | 0.0105 |
| Leptospirose | 0.2978 | 0.4747 | 0.0368 | 0.5781 | 0.5485 | 0.4747 | 0.0368 | 0.0306 |

| Ranking | Média | Mediana | Moda | Máxima | 75% | 50% | 25% | Mínima |
| Água tratada | 0.5 | 0.5082 | 0.0365 | 0.9582 | 0.724 | 0.5082 | 0.2945 | 0.0242 |
| Coleta de esgotamento sanitário | 0.5 | 0.4484 | 0.2415 | 0.9872 | 0.7292 | 0.4484 | 0.2415 | 0.2415 |
| Diarreia | 0.5002 | 0.5223 | 0.8813 | 0.8907 | 0.6826 | 0.5223 | 0.32 | 0.0062 |
| Dengue | 0.5001 | 0.5353 | 0.7294 | 0.7294 | 0.6614 | 0.5353 | 0.3565 | 0.0017 |
| Hanseníase | 0.5 | 0.5337 | 0.6371 | 0.6371 | 0.5969 | 0.5337 | 0.4219 | 0.0026 |
| Leptospirose | 0.5 | 0.5222 | 0.557 | 0.5609 | 0.557 | 0.5222 | 0.483 | 0.0624 |

