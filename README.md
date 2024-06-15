# 💻 Núcleo Web

Olá, pessoas! Bem-vindos ao Núcleo Web! Este é o local de acesso às atividades deste ciclo.

Neste texto seguem algumas explicações importantes a respeito de como funcionará a sua trajetória aqui dentro.

- **Orientadores:** Turma  [Fábio Santos Matos de Oliveira](https://gitlab.com/Fabio-Matos1303) | Turma  [Djair Maykon](https://gitlab.com/djairmaykon) | Turma  [Márcio R. Júnior m](https://gitlab.com/marciojunior2109) 
- **Coorientadores gerais:** [Raissa Luna](https://gitlab.com/raissalunana) | [Lucas Júlio](https://gitlab.com/LucasJulio)

## Configuração do ambiente

### Requisitos do sistema

Primeiramente, vocês terão que preparar o ambiente na sua máquina para começar a trabalhar. 

Será necessário realizar a instalação do [Git](https://git-scm.com/downloads) e de uma IDE de código (preferencialmente o [VSCode](https://code.visualstudio.com/download))

### Criando a sua branch

A branch onde estarão localizadas as atividades é a `main`.

Crie sua branch a partir da main seguindo o padrão de nomenclatura `[nº da turma]-[nome]-[sobrenome]` para realizar as suas atividades.

Por exemplo, se seu nome é Fulano de Tal e você está na turma 2, você deverá criar a partir da main uma branch com o nome `2-fulano-de-tal`

## Entrega das atividades

### Issues

As atividades deste núcleo, juntamente com seus requisitos e materiais de apoio, estão listadas nas [issues](https://gitlab.com/InfoJrUFBA/nucleos/2023/2-ciclo/web/-/issues) deste repositório. 

### Pastas

Cada projeto que será desenvolvido durante este ciclo possui uma pasta própria no repositório, na qual tudo que esteja relacionado a ele deverá estar contido. 

Atente-se ao fato de que é possível que um mesmo projeto esteja sendo desenvolvido ao decorrer de várias atividades.

### Commits

Seus commits deverão ser contínuos e explicativos, então nada de fazer a atividade inteira em um só commit com a mensagem *"atividade do núcleo ae"*, beleza? Os orientadores precisam acompanhar o progresso dos membros, e isso será feito através dos seus commits no GitLab.

### Pulls

É possível ocorrerem alterações no repositório durante o período do núcleo, como atualizações do README. Portanto, lembre-se periodicamente de executar em sua branch o comando `git pull origin main`, para certificar-se de que sua branch está atualizada em relação à main, e assim evitar conflitos na hora do merge request.

### Merge Requests

Quando terminar uma atividade, certifique-se de que todos os requisitos foram atendidos, e em seguida realize um [merge request](https://gitlab.com/InfoJrUFBA/nucleos/2023/2-ciclo/web/-/merge_requests) (MR) para a main, a fim de sinalizar para o orientador que finalizou sua atividade. 

O merge request deve seguir o padrão de título `[nº da atividade]: [título da atividade]`.

Os orientadores fecharão o MR quando a atividade estiver concluída, e poderão adicionar comentários para passar feedback.

### Strikes

É imprescindível que você sempre entregue suas atividades no prazo. O prazo máximo para cada atividade será até **4h antes da próxima RN**, para que o seu orientador tenha tempo hábil para analisá-la.

Vale ressaltar que uma atividade será considerada somente no momento em que **todos** os requisitos do enunciado forem devidamente atendidos.

4h antes de cada RN, o orientador irá verificar se você tem atividades pendentes e, caso tenha, será aplicado a você um "strike" para cada uma destas atividades.

Será automaticamente **eliminado do processo seletivo** o trainee que acumular **3 strikes** antes da atividade final.

## Observações importantes

Lembre-se de que o núcleo é o seu treinamento para começar a trabalhar nos projetos da InfoJr. Portanto, tenha em mente que sua postura aqui deverá ser adequada para o que esperamos dos membros em nossos projetos. Sendo assim, não será tolerado:

### Falta de compromisso com os prazos

Isso inclui começar a fazer a atividade em cima da hora, pois isso impede que você tenha tempo hábil para lidar com imprevistos, acarretando em atrasos que seriam facilmente evitáveis se houvesse maior antecedência na hora de fazer a atividade.

### Entregas incompletas ou mal feitas

Não se restrinja apenas ao mínimo necessário para a atividade, dê o seu melhor e tente fazer algo que você teria orgulho de mostrar para as pessoas como prova do seu progresso.

### Ausência de comunicação com os orientadores

- Está com dificuldade? Peça ajuda.
- Não conseguirá entregar no prazo? Justifique com antecedência.
- Algo te incomoda no núcleo? Dê o seu feedback.

A comunicação é essencial em todas as áreas da vida. Os núcleos de estudo não são exceção.

Por fim, lembre-se que a prioridade máxima aqui dentro é o seu aprendizado! Bons estudos! :)


```
nucleo-web
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  ├─ exclude
│  │  └─ refs
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ 3-Bruno-Emanoel
│  │     │  ├─ 3-talita-ester
│  │     │  ├─ Bruno-Lapadarie-backend
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ 02-EderNatan
│  │           ├─ 1-1-welovedogs
│  │           ├─ 1-1-welovedogs-2
│  │           ├─ 1-alexandre-coelho
│  │           ├─ 1-Arthur-Batista
│  │           ├─ 1-breno-cupertino
│  │           ├─ 1-Carlos-Eduardo-Dourado
│  │           ├─ 1-David
│  │           ├─ 1-David-e-Priscila
│  │           ├─ 1-Douglas-Aleixo
│  │           ├─ 1-Douglas-e-Arthur
│  │           ├─ 1-eduardo-vasconcelos
│  │           ├─ 1-israel-pedreira
│  │           ├─ 1-jean-anderson
│  │           ├─ 1-joao-soares
│  │           ├─ 1-Marcio-Junior
│  │           ├─ 1-matheus-molinari
│  │           ├─ 1-Paloma
│  │           ├─ 1-Paloma-Brito
│  │           ├─ 1-Priscila-Anjos
│  │           ├─ 1-Rian-Victor
│  │           ├─ 1-samuel-almeida
│  │           ├─ 2-2-plantcard
│  │           ├─ 2-2-plantcard-2
│  │           ├─ 2-2-plantcard-3
│  │           ├─ 2-cristiano-santos-ribeiro-filho
│  │           ├─ 2-Djair
│  │           ├─ 2-elis
│  │           ├─ 2-Gabriel-Leal
│  │           ├─ 2-igor
│  │           ├─ 2-igor-spinola
│  │           ├─ 2-Jaedson
│  │           ├─ 2-marcello-lima
│  │           ├─ 2-matheus-dias
│  │           ├─ 2-Mikelly-Correia
│  │           ├─ 2-pedro-teles
│  │           ├─ 2-pedro-teles-4-jogo-da-forca
│  │           ├─ 2-pedro-teles-5-blog
│  │           ├─ 2-Thales-de-Carvalho
│  │           ├─ 2-Victor-Coutinho
│  │           ├─ 2‐Cecilia‐Santos
│  │           ├─ 3-3-portfolio
│  │           ├─ 3-allan-barros-cruz
│  │           ├─ 3-Beatriz-Espinheira
│  │           ├─ 3-beatriz-rosa
│  │           ├─ 3-beatriz-talita
│  │           ├─ 3-brian-machado
│  │           ├─ 3-Bruno-Emanoel
│  │           ├─ 3-Bruno-Emanoel-Allan
│  │           ├─ 3-fernando-barreto-costa
│  │           ├─ 3-Gabriel-Marcos
│  │           ├─ 3-isaac-borges
│  │           ├─ 3-joao-araujo
│  │           ├─ 3-juliocesar-moreira
│  │           ├─ 3-mauricio-matchal
│  │           ├─ 3-naira-beatriz
│  │           ├─ 3-NairaBeatriz
│  │           ├─ 3-pedro-rodriguez
│  │           ├─ 3-rosana-carvalho
│  │           ├─ 3-Stefanny-Oliveira
│  │           ├─ 3-talita-ester
│  │           ├─ 3-vitor-renato
│  │           ├─ 4-4-jogodaforca
│  │           ├─ 4-4-jogodaforca-2
│  │           ├─ HEAD
│  │           ├─ main
│  │           ├─ Marcello-Lima
│  │           └─ revert-523fe0af
│  ├─ objects
│  │  ├─ 00
│  │  │  ├─ 6030930e167d386313d9fb442491bd12fb05af
│  │  │  ├─ 6f1fb413518088d10ca1eaa8486532c0f705c4
│  │  │  ├─ b33cb9662f1122a92e4f6e4cf6d851736a84cf
│  │  │  └─ e9b4f095a8ffb0d252dde0915382ebc83f5334
│  │  ├─ 01
│  │  │  ├─ 1102c09890eeafc9ce963fd60d4eaf66c999ad
│  │  │  ├─ 23605deb14a33f042220658d4a6e45fd9cee99
│  │  │  ├─ 5235788daaae25887eda0d74828d13e1f0c4c8
│  │  │  └─ 8da4e21ac469d07b7e87c1c5dcf01681716792
│  │  ├─ 02
│  │  │  ├─ 415bbe3405364e9c438e31e9336c526b26c32c
│  │  │  ├─ 4b31cb06cdf1f114aee0a3883843ea0b1b04b7
│  │  │  ├─ 4be7678312d09422b71afe2c81aaf0135ab151
│  │  │  ├─ 549f60b170dbd8c600cf6f0961deff70ecf099
│  │  │  ├─ 622f457e497ee3cfda498cb21f3ff4498ff0bb
│  │  │  ├─ b94c8b5e1614c1957a5aacef828459323b7f7c
│  │  │  ├─ bf40d3719eb3ad09c0c149924336303230bdff
│  │  │  ├─ c82982a8a3b8833fee3cc84c7e3c4f463795cb
│  │  │  └─ fb29109120b8ddaeaad85d68a5c55325b3a8d6
│  │  ├─ 03
│  │  │  ├─ 2582354cda01e25eb0920603c30339f8ebcfdc
│  │  │  ├─ 371f7fa1c0db1339d78a45b49d65a9a34280de
│  │  │  ├─ 5496ac71ce030c729823db1fad2b996354dd98
│  │  │  ├─ 95abe2e461cbefd494b3896998b64e084e153f
│  │  │  ├─ 9e211e0bfb5880218d3b80cf60bf1e0a4cac89
│  │  │  ├─ b2d7d4515e98a5f59cb6391c76502b05a9e3e5
│  │  │  ├─ c4a166e24eb457d8ab98c02c9aeaebcc826ea3
│  │  │  ├─ d0d755281cbf07c11739112d3963747bc675ff
│  │  │  └─ ef1f1f4d8b91cd3341a189c9c5997de8a1137c
│  │  ├─ 04
│  │  │  ├─ 3394decb0aded07e40a3aa2db8aa238dd81b33
│  │  │  ├─ 56f5e6fd77bf18c6f388b3f6be341d18c2fb53
│  │  │  ├─ 86a7e1e4f8a0de858433bdb355311dfe97d8f7
│  │  │  ├─ ac073940299e513d3221bfb05256538ddf433b
│  │  │  ├─ d7539d7157db1c03a5c13ac4e4e1e94c70dcc1
│  │  │  └─ d9523cd39d059788d49e52268dfc4c6fb1a341
│  │  ├─ 05
│  │  │  ├─ 271fe76fb3f591d71b95f5d569c3bc5ebb096f
│  │  │  └─ bdb24759a1d45e0c486695d18ea0d74f195308
│  │  ├─ 06
│  │  │  └─ e064fa9311951d792870673848a4fe502fe8d9
│  │  ├─ 07
│  │  │  ├─ 3b848e7d2f87f2a9be07ef8332a077f8f2c944
│  │  │  ├─ 54bbb2f1fc8e0eef1eb08706fe09df22b44e28
│  │  │  ├─ 5799a9331f5dcd30d65aab9a24b4f86238a9b3
│  │  │  ├─ 7741ab19da11e443ae15095e6ff5e154e04db8
│  │  │  └─ 7fb19cc23a3ff4a5f3ad5ad988debe69df01a8
│  │  ├─ 08
│  │  │  ├─ 0f70fda99810ca150d90a7f211c3416c4cfd01
│  │  │  ├─ 5bd9aed5f4945725af8ddd28ec24e58634aa5b
│  │  │  ├─ 827356fd2a9f59b8fd8a492bb0ea82e0fbbd67
│  │  │  ├─ a7f2866371baf67f9a19bcb957ed4272057850
│  │  │  ├─ cc59807ad744c329b6a8659c93179852e475c3
│  │  │  └─ cf06dc5df5e57757b54a2c90dc2fadf9db4e14
│  │  ├─ 09
│  │  │  ├─ 46b4ebdddf570612660cf05a75ba4af0fac32a
│  │  │  ├─ 4958023ee40fba6b16e5d39d2761864bcee936
│  │  │  ├─ 5a31b55ec2141b2871cd82ccfe6c2de5b56fb3
│  │  │  ├─ 62f209606d1038e379a5b50b1d4a115d449a99
│  │  │  ├─ 7851f83fc805e09cc250c3d4910d114bd29d0e
│  │  │  ├─ 7f0641fa38cbdbc942bae1562b8d6a9745d44a
│  │  │  └─ 8b21c8f035b893b042861cae1704617bc8e187
│  │  ├─ 0a
│  │  │  ├─ 318f2a1a5bb9702b1aa363be7b3aff2f0cfbe8
│  │  │  ├─ 322a1084f9bc00c79b4a56d38c7331cff0a65e
│  │  │  ├─ 8558493cebea2d8a076570cb3831b4530326bd
│  │  │  ├─ d63d0c3ccc00ade1a837eaf994e8a7c835d03f
│  │  │  ├─ e4d603920be069847362f6af21702922ad44cc
│  │  │  ├─ e8681f461ea69b4899195fa128fa8947eecc66
│  │  │  └─ f4192c23a6036f27fba5735cbb5dd353a9d4af
│  │  ├─ 0b
│  │  │  ├─ 4b89feccc97b4b6c2dd23bb1706787dc58f799
│  │  │  ├─ 4ecad0c1637044aff49d25e1a3ffaebbb4f832
│  │  │  ├─ 80e8ca688108ddd09ae70653beacd7e562c8e8
│  │  │  ├─ 8fe44955c629f98f2680134d645583ccd31683
│  │  │  └─ f35a38116e0babc7b855f924719cf443d6b074
│  │  ├─ 0c
│  │  │  ├─ 2ac3a68b8f240fb33a4307a6078f3478eb9010
│  │  │  ├─ 3c6bb74bb299a9aac35672ff183cc65b24aefd
│  │  │  ├─ 67fb1cc31320da50c7f70b4c6136dfdbb0632c
│  │  │  ├─ 6be8e3d1745891c9be25c7dd9ad419c1f72d21
│  │  │  ├─ 81d10a826900a50f7b84e3fc4ac3a9e361f5f2
│  │  │  ├─ be83cdf10f1c06b04f2c2012966f14f8662df4
│  │  │  └─ fbabefebf520ff2873f434a5e18495b6ca6a95
│  │  ├─ 0d
│  │  │  ├─ 0396eea9b5a119e32a7eec6466344d157fcce9
│  │  │  ├─ 08c6f7c022e31e8ff125ca58b3d2ad92f42e39
│  │  │  ├─ 297bd26401d4c42c2f7b3dcda6d7f5d8fa7af6
│  │  │  ├─ 31495a9d58a79eb22dc88979e04992442adae1
│  │  │  ├─ 82f3c7d09f7005c9c8877a6eee58fc7c93222e
│  │  │  ├─ 8aa915dd778a94b20f8a6d106db02c6de90ef2
│  │  │  ├─ b22061dfcafd18842abfe2ff5d084e877310fa
│  │  │  ├─ ce8ddd318dbab68bb0926adb636c65f9db8327
│  │  │  └─ f65358482fe25f64e6b7d5891f7b21a83f3ec1
│  │  ├─ 0e
│  │  │  ├─ 7211eec9294d6da8539f05f3652a1ea1d986cf
│  │  │  ├─ c5f9793e249bee815a0ed055d3ef44f0b98a01
│  │  │  └─ e1f81bb091de65801948a78e21d7331245e648
│  │  ├─ 0f
│  │  │  ├─ 7fa7eb2ca9c4222964710838fe5e514dd116af
│  │  │  └─ a54aeff2cf43eb464ae66953bd91c1b269aec9
│  │  ├─ 10
│  │  │  ├─ 0b67da5e025ba8ea502019fbe34b12ea20f473
│  │  │  ├─ 0cbbdb744ea47704e24e7da2df3b3996533f72
│  │  │  ├─ b17390384ba04663c7eff0fe9a5223c00cc512
│  │  │  ├─ ba28cdc89e8064adb6864923c1dbe04b2b5d20
│  │  │  ├─ bd6194ad690753fa85962ef219fbe4a04739d9
│  │  │  └─ f11bbebe696500448686c49557c0f3da3cdfc4
│  │  ├─ 11
│  │  │  ├─ 0dd93336f6b5216c7c6ba18a51068d7e929dc3
│  │  │  ├─ 63b211ee1251d92c3b159f688a2ca9ec8c02d9
│  │  │  ├─ 78e081ba4afcc3d8ac1e48d1c078915cdf77ae
│  │  │  ├─ b8e279bde410519500aa4fc164c59f53e504f8
│  │  │  ├─ d231ff08c9d3a769f899bc4bad5c83717ade0c
│  │  │  └─ d4ff86f5680a5132d20154f8c7fca356913cd0
│  │  ├─ 12
│  │  │  ├─ 02eb4beaae9dfba917d850566a56d7fd277b20
│  │  │  ├─ 7bc5462f99c2a19f67922e45110a5866824944
│  │  │  ├─ da1f980adc6c6453491fe96c7ed02eeecbb1bf
│  │  │  └─ f6d9cfadb894e196a7c2c46dc5ede7489bf042
│  │  ├─ 13
│  │  │  ├─ 07bdda9db4ba8b832ad88f879ae52cfe84929d
│  │  │  ├─ 1969d139c116d87579c1ac94787e9cefe18df7
│  │  │  ├─ 1f75c41d080dfef1de5ee9fd8fb134625dd674
│  │  │  ├─ 30a586fee1aedd6238724c88fb8ca534add585
│  │  │  ├─ 5ba1d0ce6a2fb5ac4a5d092fb87318b4c12b06
│  │  │  ├─ 91cc3ff82da058cfb02b7b5a77c42f1ba1ffc3
│  │  │  ├─ bc8e919e76c063494feb334efc64f7205bb8e8
│  │  │  └─ d0c11dbbaafd5f5fc7a710c212c68e309b7af6
│  │  ├─ 14
│  │  │  ├─ 0a9c9fec23c9b0ed5266708649928e63a12e9d
│  │  │  ├─ 134e442294335cc153df61c3d9132452bfc455
│  │  │  ├─ 186bc8b7dafd0d1167362b60ac52461cb82536
│  │  │  ├─ 24506c8eb4eeba2948b77402005e91ad4cc733
│  │  │  ├─ d01d3950f4da2120aa334decf196efceeebd8d
│  │  │  └─ eab86f6ec71a3d0a880debd95b6f7542e90eb8
│  │  ├─ 15
│  │  │  ├─ 4c20b1d1ad0dc4f44fa7158eb7fc84e2fff8f5
│  │  │  ├─ 5719c54ef5ead29df56f284377a230ead7cb89
│  │  │  ├─ 6885003689de8d121e9f30c24a11b2d30c0bc5
│  │  │  ├─ 9929d45bb90db22a7620c71ec6ef8b7a2fa245
│  │  │  ├─ 9eba4a9970697a228ac0232c1459108e730b15
│  │  │  ├─ d3d9c175755bfd6c27611060a2f8859c549dd9
│  │  │  ├─ d74b3f5b09c70d1837128e6afa9b6d7c412f66
│  │  │  └─ d946a792ba2c823f654ca8e39c4151ba9c9a07
│  │  ├─ 16
│  │  │  ├─ 096ec06282aa08ba3055f80ff2560d54937130
│  │  │  ├─ 142623414a937d1edabf3b40a712e9f3c8f3dd
│  │  │  ├─ 15c757d9eb54f90120908fb663ce851110fd09
│  │  │  └─ 4e5e7d556fbe03197ed7f8dd3680d24aae7c6b
│  │  ├─ 17
│  │  │  ├─ 2179c520c2da55dec6cf4e96bedd3c587c8b86
│  │  │  ├─ 6d6253ee0391ecc5aafea342f4167136791be9
│  │  │  ├─ a4fecdaa35dee18167573a6422f5922bda39f8
│  │  │  ├─ b3a9c71ca783494fae3fd2b3a9b7b8a4b29dd2
│  │  │  ├─ bc33909f1238ac6e0046844c8d735d82fc2842
│  │  │  └─ c84102dbf73cc409f826ba8d3c15320a9f19fb
│  │  ├─ 18
│  │  │  ├─ 1050ddc03bf99a1f55694a78f7d4f1aef5c935
│  │  │  └─ 3a3aca064647cd686fbf36903c8abca24556ee
│  │  ├─ 19
│  │  │  ├─ 08f01e182ab67c4cfedf22e9b1d0a043d9d552
│  │  │  ├─ 18d427fb8025e867ceb234a16242665440368f
│  │  │  ├─ 3d20705a3056b9915c87b99637e69dec0c54f4
│  │  │  └─ c05245c6d8446f40cb92ce80b0edae9f2c1889
│  │  ├─ 1a
│  │  │  ├─ 0759bd674e347777c40286a4f3f04941a12add
│  │  │  ├─ 44b2ef1e5beb0a2660766145d155ca53075441
│  │  │  ├─ 5d3f3062d2e34e2d477e5b461f300a9019cc5f
│  │  │  ├─ e96948ee93aaf3cee18cdb390e74a4673b1510
│  │  │  └─ f9a9c1589ea3fe7c2edbb9ce823ab54138c314
│  │  ├─ 1b
│  │  │  ├─ 0844a4f50549646637cbbb89031528b11cca77
│  │  │  ├─ 0be19bcdbf6dff535627fda3930e4f9dc82264
│  │  │  ├─ 219eaf567ea8ee867ea900f138a8b89db41f1f
│  │  │  ├─ 6e4a3f7cb1a350ee2b97b27087c2455cd079af
│  │  │  ├─ 7dcd54fc5032f1e266d5957007ff8558719ff9
│  │  │  ├─ 815d4bfcb087a03c692220196f81bcf9c6c93c
│  │  │  ├─ 8f271b01b3ecfc53fdee7dfb719c6f5f673d24
│  │  │  ├─ b6ec23e7165cd07a4e4cd2551e0e621a18886f
│  │  │  ├─ bb10b780e44457dfce0d15fb127be9039fc592
│  │  │  ├─ c774f3c8b8663265f8ca0397aad0f390582cb7
│  │  │  ├─ c792879f34e446b5aaecaffa53f99ba32f3c44
│  │  │  └─ f2afd76eaf482b6d6e370bb5d16fa812ba9fb9
│  │  ├─ 1c
│  │  │  ├─ 237f41161acec25532d1277a49425ed1a0f084
│  │  │  ├─ 69ab93bf1424230641d889310dbefae3892b9a
│  │  │  ├─ 98486bc69375023c3d33b4da16c8afb6c5ded5
│  │  │  └─ 99249dca3721d4634e80a09b5bf134c0a08313
│  │  ├─ 1d
│  │  │  └─ 31ba1085e62ff21060e0978df6f33aad2383a3
│  │  ├─ 1e
│  │  │  ├─ 25bc8c820cdeb26b79fdec7e890deccbc96ca9
│  │  │  ├─ 8818400a1e4bf7e454a492c707ef1823a721df
│  │  │  └─ 892ec15d7c0a207c1c499444535b4594e0f69b
│  │  ├─ 1f
│  │  │  ├─ 3a2a349c2a4d1578ef5fb79ced09d59d7896fd
│  │  │  ├─ 8ba878f61e2ae8b6e01d98804b1a350e11468f
│  │  │  └─ b60f0a80696622a442849583a4f153ad63a53c
│  │  ├─ 20
│  │  │  ├─ 0fc22881095792a653011c8478c9d73432a773
│  │  │  ├─ 74bd52680c8d5f9f62bd5b94cd6a63f51c78aa
│  │  │  ├─ 78142efd68a405c9691d4e876b2026dc782add
│  │  │  ├─ 795b698088d91ecfa80268eb186c336d7f4bf2
│  │  │  ├─ a2cbb09c69624a4fc6bd6b36d0da5c31d87678
│  │  │  ├─ b00c872054305a15b0b23175fe2db48ec6e528
│  │  │  ├─ bab3d28111eadb7457616a9e7bf418752c4309
│  │  │  └─ e3f41a14df9abba0bbf10c2f170d941497c7cb
│  │  ├─ 21
│  │  │  ├─ 42adb52586786000a4a323d9082ad90fa1aab5
│  │  │  ├─ 46f38dbfb0e7caa406aeb3ca57fac4772e094d
│  │  │  ├─ 63c5302fa875a1e298071c1f758fe929db58f5
│  │  │  ├─ 7532918b2d591c97c83accc70f23e091b14a5d
│  │  │  └─ dace6318392e2f0cf1d97f63a0e228de418fed
│  │  ├─ 22
│  │  │  ├─ 09499dcb8eb4e3d8c494501ed0cb7164d3e483
│  │  │  ├─ e383d6c6a8492f973a7bbdbdc4e09ef3c5fdbb
│  │  │  └─ ee7290bafb8d92b111b76aaa6fd62dff42d860
│  │  ├─ 23
│  │  │  ├─ 550191a3deac81ab457cb02bdce6de36a4feba
│  │  │  ├─ 719f60127e1df6f4da3848fb9ba6928244cd1c
│  │  │  ├─ 7636dfc7eaa540ef91af7d9ebb4eecc7d19ff9
│  │  │  ├─ 87d15bd258a9259a29173781b39e605df24bab
│  │  │  ├─ 9c5cc8d7f4a469803e582a136d8f044c01d2ba
│  │  │  ├─ aa8e51559632ebf94e1a89ee24d872543b5140
│  │  │  └─ f6435dd349e339628191f09eba20b19f3346bb
│  │  ├─ 24
│  │  │  ├─ 07d0bb0e0a84b84dd187e848c6a0543e67507c
│  │  │  ├─ 25882363ef6c57250767c76a2d26f5a272b8bd
│  │  │  └─ b57a3bc652e3e6172f076f5a2ab7bf02f601d5
│  │  ├─ 25
│  │  │  ├─ 26ee04a906b2b7e45730410041c6ab1991a345
│  │  │  ├─ 3f217b9513aeda219c16c6b3bd4f8654ccb183
│  │  │  ├─ d61c4426add67f1b0d8d22fcd56a4139c21a58
│  │  │  └─ f4ba745bb8e399cf33658ad3713e75d1bbe03d
│  │  ├─ 26
│  │  │  ├─ 43ab9e569f4bd9753f30ce28eb22de921bfcdb
│  │  │  ├─ 793970902cee6c148ba775cd4d5befc8ff45b5
│  │  │  ├─ e04aa037312aee8f8fc15235c94106b7f62294
│  │  │  └─ e5ab232d8c145eab101db68c7ca832ba5b5015
│  │  ├─ 27
│  │  │  ├─ 186330fc69c7aa5dd09fea82a27b4b29ffbf1a
│  │  │  └─ 409ddd548fdfaa23548b1462f122c3f6df4c0a
│  │  ├─ 28
│  │  │  ├─ 1fb4064471a2ad96bcf4e13c0cf4dd0d86972f
│  │  │  ├─ 1ffc161f4d41943696463ac2568a45c261e4a4
│  │  │  └─ 7a2c30687ab7e44a3b354ccffed9f5cdd34eca
│  │  ├─ 29
│  │  │  ├─ 825b6b0d20534fc88df8d7cf8ce1fb66d937e1
│  │  │  ├─ 84d37c1104f82122debec06736dbe801c95a9d
│  │  │  ├─ 917007b6d44b76d2b2a839cd60ec06baca3c7f
│  │  │  ├─ c43b37915f3792a63135d8eabce2cf621d0002
│  │  │  ├─ cd6e8556f55d918ee188e7e89b3daba785f9cb
│  │  │  ├─ d73d8eb62afeb8d5566f7ec91bcfd9b3f4e196
│  │  │  └─ ea3212aa08b5e595574416cefd17398c291443
│  │  ├─ 2a
│  │  │  ├─ a29c9e9b38cc26fd5b1c804eb3101678ada748
│  │  │  ├─ ca89d4fb7138717dc9bd03a55c8a45c8df698c
│  │  │  ├─ d5ca748e4ed7a3172db96dbada7371877efd5b
│  │  │  └─ dad309c0ae8e21c7cde4864c25ef265418b1d5
│  │  ├─ 2b
│  │  │  ├─ 1a02ba1c89b5c1fd709f14e5e2fdee16c9d1bb
│  │  │  ├─ 21f04644120d117131795b9bf3eb48cc654be2
│  │  │  ├─ 37217c67b10a6fb2a749a3b88c73c16623872d
│  │  │  ├─ 540c0a3d731df36d7a3a9ff00c596bc16d9fc6
│  │  │  ├─ 7cd2a162f9aeb2f1408e25fcb178f6b5bb9a41
│  │  │  ├─ b2b92bede0214002e415cae564a8d727262289
│  │  │  ├─ c2c75c15de01b3a6eb9dedb2b004112059cf51
│  │  │  ├─ ed9ec96a41dfb81e5f32a253ab615902274523
│  │  │  └─ f4493f8c86b398b9312cd255052e83d6b12e58
│  │  ├─ 2c
│  │  │  ├─ 25da0f964051422d79f4a2ffcb2cedef9ba38f
│  │  │  ├─ 3268966780be3a2d28ec955cfa8fb393f988a4
│  │  │  ├─ 41a3b0d153423c3871b248dd16eddf4e146cd8
│  │  │  ├─ 691e3413961f69d613ec020f4f02cd82fc0ce8
│  │  │  ├─ 93b6849330093f878bc5ab00c2d11511f47972
│  │  │  └─ d7deb71686fb4ee506a77c1199c3784f593ad1
│  │  ├─ 2d
│  │  │  ├─ 5645941675e21a48944e9add914add02558e02
│  │  │  ├─ 624c34430cd8d94ace32359b34245419e3eda9
│  │  │  ├─ 63eea64b37f0c6fd1e9a5f63fdd167448e145b
│  │  │  ├─ b1494cd6ac95d3a900470748d015b12ebed70c
│  │  │  ├─ db9fe2e166e1832a25c3743178059f83c918b0
│  │  │  └─ fdb0af53e17ba451781186fd71c77d0ed7df5f
│  │  ├─ 2e
│  │  │  ├─ ba9c8b4ce5c066dc90019d64a0bc49a3d03f81
│  │  │  └─ bdd3a3a68b166b1dffb66f650429c1b708a631
│  │  ├─ 2f
│  │  │  ├─ 080c1e26cb521ae58e1aafbbe58396047b7c25
│  │  │  ├─ 0d07189a21f409f741f1024ae700dd1614a211
│  │  │  ├─ 7f4ee35ab4110284e1abb81ccdb8bb573372da
│  │  │  ├─ 8e441b1481f15387e40dbd40a01588de4a7776
│  │  │  ├─ b0001db52c79d3ee71a20834b7343a43ff6d92
│  │  │  ├─ d16eb81b2a7a9a2528df43e2dce3dfbf29b151
│  │  │  ├─ df08fcdc2762c99b929cabe830f88fe5e8d9b5
│  │  │  └─ fdc491c85e0419cb796556d7f651ccbea9b892
│  │  ├─ 30
│  │  │  ├─ 0d0914e6268ad9a2dd3df783ee1e499960cb53
│  │  │  ├─ 83fbef5796531bd411f5853c7471b0fa9a2937
│  │  │  ├─ a39fec620c338483daba70f093e7a1da0cace9
│  │  │  └─ df65bd8107a117959ec4f12e1ec4bf412b823d
│  │  ├─ 31
│  │  │  ├─ 18e916fb23885635e56d3dffaddbdff1359976
│  │  │  └─ 7025d3c8748817a91df0ed6c5a28cc9a4ff3c4
│  │  ├─ 32
│  │  │  ├─ 0ce55bab26e1f169aa54037a53a423e38e59b0
│  │  │  ├─ 83470c4c9b4b60852cb445ab48653f437cc262
│  │  │  ├─ 88cf4c96efa4354f716344b27f0282ff0e9b23
│  │  │  ├─ d0e744ac5dfc8d2504f88548dd8a33b2e3b632
│  │  │  └─ dc46b5810d2a08fdd294d88767887def7432ea
│  │  ├─ 33
│  │  │  ├─ 0682478b2d4021eb2a232a265d7cad866f7c47
│  │  │  ├─ 8d27503c704199ee8a2e5ab19efb5cb336aa11
│  │  │  ├─ b53c5a4ce6e1d99e056085eef6ae39ef616686
│  │  │  ├─ dd5db4491d19f82c72897b44f956d6611b5c1e
│  │  │  └─ e5d0f52caa8e224637ae7b627a638fad1c45ad
│  │  ├─ 34
│  │  │  ├─ 8771770760f3fbf9362f2c9e85cd3c2f614145
│  │  │  └─ 9b17663df10b2a098d493111fc7d38e8462b80
│  │  ├─ 35
│  │  │  ├─ 0681bdb2a21c6027062424371ddcbede4ae482
│  │  │  ├─ 2e3b4b6f34943eb568505e400a8760a5caf959
│  │  │  ├─ 55aa30fd938163a88ef07e9b28ec77510e3ea4
│  │  │  ├─ b7abd56c84b64d8fa484ae75dd05e621b8a3fe
│  │  │  ├─ d218a8ed2f888b62efa16f29135b7d88353092
│  │  │  └─ d963572e2c9152d81ff06febe0d6115b33eabb
│  │  ├─ 36
│  │  │  ├─ 1f626c7a567e7c26b40ec539f5209a276c5468
│  │  │  ├─ 37d9fc71f775de958c3888edee27eb3d3e89f0
│  │  │  ├─ 3b54125a9f489136f1d65d10546747fa7775cd
│  │  │  ├─ 3cfb1a255f242e2262e7b283dc7d5c1557fe59
│  │  │  ├─ 44779555eb5bd9148a7a3de6c45240dacaa094
│  │  │  ├─ 539cf4d7e71ca125e2ab4e2bc12f0c6740a97a
│  │  │  ├─ 80c884ac4145045cc94632216947a80476aef9
│  │  │  └─ c61e1fe3a5e56c89fb94f6970d50fbee251e94
│  │  ├─ 37
│  │  │  ├─ 3b6d4ec69f3d6bfa306663906e153478fbff8c
│  │  │  ├─ 927ee6d940b77afef7bcfa18b6a50a5eab9520
│  │  │  ├─ b87c6163002ff5a33aec2e955304b7d676d6af
│  │  │  └─ e71cecededcfb2f1a63a6c0188a4f8a4efd5fc
│  │  ├─ 38
│  │  │  ├─ 1159bd1ff16d053374fe22ddb4d7c8c80df6c4
│  │  │  ├─ 3ec9a47734dde3de7c98c8d1c469089a90f41a
│  │  │  ├─ 42c67eb27cff971b07ee14f9431f251030af41
│  │  │  ├─ 5c584d898128d98c52a2696b0caf8c21839ffe
│  │  │  ├─ b1e1bc13b44bc83f410eec942e4fa8357854be
│  │  │  ├─ b6da2a90abbb560766ea59a8afc651a44dfe04
│  │  │  └─ c24c8d4d47c07182ac59e6052095fc541d22c9
│  │  ├─ 39
│  │  │  ├─ 09f4ae9e1b3f9a1a8c83632f6ecd32c63e289d
│  │  │  ├─ 21eb30c3c0fa45069458619b2f96c53ce95860
│  │  │  └─ d6c89e1232784979bcb8f41dda4792b8a4b8e2
│  │  ├─ 3a
│  │  │  ├─ 56f1e5bedca7f3d4cdf9d23278776ad5ff4929
│  │  │  ├─ 69ef97ab80166746cf03afaf3dd24e3c959190
│  │  │  ├─ 78eaa1c14d3fb4c5da5f949582333079e01bf5
│  │  │  ├─ bf4670f9b001c62ffb46004b57f421bbe803cf
│  │  │  ├─ f7fd6dda900f85468f7ff23324184c2b96d066
│  │  │  └─ fe561471b8dc569a7d304287aa11bcfda719ac
│  │  ├─ 3b
│  │  │  ├─ 21196e6904e708d76a4a857b8d3a754a8fdc08
│  │  │  ├─ 562dd4b48f6f1f11ecb299da6443b30dc78201
│  │  │  ├─ 664107303df336bab8010caad42ddaed24550e
│  │  │  ├─ 8bb7cc3d139f1d48a189593821ec2dd4480eac
│  │  │  └─ e0e54f690369b6ddf79a9e497f7cb66dd90998
│  │  ├─ 3c
│  │  │  ├─ 074a0be0bc97058962ed864ffd02d418cdfb6c
│  │  │  ├─ 1e7750415fa01194244270218d037d29520291
│  │  │  ├─ 23aae3279b39a1b45dbaa3b677add9228a75ab
│  │  │  ├─ 660afbcee0fc7ce3864e94e5129852fa1b9a53
│  │  │  ├─ 6ba3890167de4984d20a61d09da168cabc7f32
│  │  │  ├─ 893341e5fcaee9440548d9c710da0ba4d6e551
│  │  │  ├─ d6399c5a1829079cb718efce179270bebe6819
│  │  │  └─ f98690c34c7e1746768a9b0b31646c62c39326
│  │  ├─ 3d
│  │  │  ├─ 1a3c82bea368c2442d2328fa60d4813e006b1c
│  │  │  ├─ 20583b81304b71b19b8405c4131e749d907706
│  │  │  ├─ 252076b7f61218a5784b2757467af3ae922e4f
│  │  │  ├─ 2b06b42265ae5ca234d5cae3753f7e641c9fba
│  │  │  ├─ 34629d876597d1e8910b0a014d872f8ac5f856
│  │  │  ├─ 8f0aa6284e27f86822a921cdb4a37da7ff0246
│  │  │  ├─ acb44b97be58bf4ffad889f8ac5f03cb22e327
│  │  │  ├─ be7692be3b93b2a42b56e146c9a39f1f73479c
│  │  │  ├─ d2bc92a48442cc42e75619c79b9a0ae19e6654
│  │  │  └─ ec0939def442934183b53281f653c565a62087
│  │  ├─ 3e
│  │  │  ├─ 1faccd634a18d41792287bb4de46f7958085df
│  │  │  ├─ 403207268e2ca23e3f2085ca806b703f098ce5
│  │  │  ├─ 8d39a6cc2fd10c783b986d8d345d94b327c58c
│  │  │  ├─ a6ce899037fade53fd282ad8b3080d2fa8c7e3
│  │  │  └─ d95059559a44f591cfeed24e08a783b06c5b7c
│  │  ├─ 3f
│  │  │  ├─ 427bd4b52127402dfb0dbc701aed9970d4ce96
│  │  │  ├─ 5cf58b67a1149c52cfd82fc27b48b9f5ebdf13
│  │  │  ├─ a1bd9e2d3a04c21d7ff614bef64b7215572bdc
│  │  │  ├─ a976ad4ca9066a1142353f9cab6b02f5fd9927
│  │  │  ├─ b56f94aef73af9f3901cd84c531463b2dddd56
│  │  │  ├─ c39bed0b7328833de3f494437714c9817abdf3
│  │  │  ├─ c594a95acd262dad299540a1c03fadf6e3cfcf
│  │  │  ├─ ee46114dddddc8a5bc1b03e655ca21a493e74f
│  │  │  └─ fba5b78dc78035e35e20042d0b2c889fcf3e63
│  │  ├─ 40
│  │  │  ├─ 0d3c31ec369124078ab4f612fb290df072cd58
│  │  │  ├─ 2ec6802af681c034c0ef78f9a8bb915728e33e
│  │  │  └─ 70d0756eac27f3fd1839e5f77b202c7af081f0
│  │  ├─ 41
│  │  │  ├─ 2181868bfa98039858a9393ab20327b23215ed
│  │  │  ├─ 6c2dc778392fd6712f39896bb0003baf345473
│  │  │  └─ d0e8109b3f0d99056dfc14df2c690c1b5e206f
│  │  ├─ 42
│  │  │  ├─ 0b2555e1daae18d550e4ad4be84413dd40f4f3
│  │  │  ├─ 2e151c2a8c90e7722ce436ca43cb8bc62a55c0
│  │  │  └─ 4ff36101966e6884e8a6d46e5e9c5cbcd9db24
│  │  ├─ 43
│  │  │  ├─ 4ea3179035f68771c364d82e9e15a2571fd2b5
│  │  │  ├─ 83a1f3b407617cb0e8e0b7d7494e99c2e7d194
│  │  │  └─ c3bb78b0d613830e35f7a5c1923fb7a3dc55ec
│  │  ├─ 44
│  │  │  ├─ 0c341566a159aa250055889971b715aab626ef
│  │  │  ├─ 255a6c882e119623d8ae4173ee371ecf65df1e
│  │  │  ├─ 2a001a67eb990f5e16d9d4b428447518e197c0
│  │  │  ├─ 83ae0e360ddb1922ef8db017940eb553f2e31f
│  │  │  ├─ 9533e520edcf8a8060b8f67985d9aa63816dda
│  │  │  ├─ 95509667afa795f5f4c6921cf05ae8a955c577
│  │  │  ├─ c589147f407c26c548c354564c99189dd7fe29
│  │  │  ├─ d69203b43d71614b40545f3c449e7be58e730f
│  │  │  └─ d8b343c659214c40f8f5ddcd96595b9da133bd
│  │  ├─ 45
│  │  │  ├─ 460eeb53f89dbdc3bc1d995c941f9648eb006e
│  │  │  ├─ 52a5188be39c0716c519eb30d5c2b5d82172f0
│  │  │  ├─ 75fa4e984f2623823792cabe115dc385e05fc2
│  │  │  ├─ 76f1873cfc6e2c967d83d98974ed58a5de7f74
│  │  │  ├─ 8389ede23a50ca815b09d22231a6c7c3eda0ed
│  │  │  ├─ bc0c9be856824fc2e3ba5ff83fe7bc87aac4f3
│  │  │  └─ f2ce7f22244b7a2668fa9a36a70a8ecb54aeaf
│  │  ├─ 46
│  │  │  ├─ 5489cca3aed96505315140a559cb2a5bcfa60c
│  │  │  ├─ 551f6eb63d615166c3ceb37987f4eacef05db4
│  │  │  ├─ 78203f97784efb95dfd9e1fbf0c434d5176ddc
│  │  │  ├─ 9719fa6c87a43cb2f09814c464029ea05e268c
│  │  │  ├─ a7d9f559c0b86caa58bfed069b01cd02881caa
│  │  │  ├─ bbb31f2cf7301afbabd93c15aad37c0348cdaa
│  │  │  ├─ ef34f326bad9544c59eaaeb95cb7a906296e3f
│  │  │  └─ ff45379f1a8b7516101c2dd5006930b4eeed7b
│  │  ├─ 47
│  │  │  ├─ 06821c9afa0d74573c8647ea47d82001ef7998
│  │  │  ├─ 199a4ef52658f473522ff948af46937f56b4a7
│  │  │  ├─ 770d8a0b2ce531ed800fe948359e0cb4d784fd
│  │  │  └─ 9f8f74e265c68bbdf64522f3036bcd7d49b9b2
│  │  ├─ 48
│  │  │  ├─ 286ae2490df4ff331a7c41543a1d1178a24755
│  │  │  ├─ 4c16bce3de7d1ae735e2187db04608e93157ac
│  │  │  ├─ 53272a0fba44a64e338d0b334a2d12852094a5
│  │  │  ├─ abe9925f46463a87dddaee04e10a9383e229a7
│  │  │  └─ e9521753c6b357425bc9f46651c06a60c66ed9
│  │  ├─ 49
│  │  │  ├─ 5fa3925fb065a982b0164aa48bcaf4e260a154
│  │  │  ├─ 5fd73267fa1167d5c7c631d7ec59057f4c5e20
│  │  │  ├─ c81064466337c0daaaaa66d9e8171d107cbb86
│  │  │  ├─ ef1b4738d18fa26fa1a43863fbe501fe71378e
│  │  │  └─ f98fb41f95ae98c8edb3b2c136959b0c7d55cd
│  │  ├─ 4a
│  │  │  ├─ 02f5ac586449a272d2f2d3db1588e32df619d1
│  │  │  ├─ 2d0219a064dbc91184cfa3b6b9f49d6c7a180a
│  │  │  ├─ 4e975d9bc65e04a219db10516c60676de3c3c2
│  │  │  ├─ 58b4b8d83410f477a660070a882b0448f06bb7
│  │  │  ├─ 711f9781eb2e6245067c3c886da670870aee8e
│  │  │  ├─ 734998023e534c530f2b9e222ae3028c322c46
│  │  │  ├─ 98db2e634b60f02e8dec5bba0a4596dd5718f4
│  │  │  ├─ d7d8e5e706c877656768bf69c83751a736f4d4
│  │  │  └─ e8ab76cdabe75e41640113a1b531ca48a7c05a
│  │  ├─ 4b
│  │  │  ├─ 030fb9d0b11e001f615592e2bdb8902c47e623
│  │  │  ├─ 8578d9a15b6d04dbfa1857aac45ecd7152e276
│  │  │  └─ 99dacc96f1e6276fd8783c10a8ca77badd32f4
│  │  ├─ 4c
│  │  │  ├─ 1050477a777336ea0ef05d23813d133154630e
│  │  │  ├─ 6a5b22abe91de113d28ecfd87acca00de7211d
│  │  │  ├─ 8518866d579dad6b9647b9572ceb1e7719a505
│  │  │  ├─ d8581d62327c4c5a3f6376bc5aa7054c12a791
│  │  │  └─ f0ce2ab45d4ba12ca3cdf8dc6adb48b11962aa
│  │  ├─ 4d
│  │  │  ├─ 10e07cb817ae4244f63f3083a967cb3b1eca62
│  │  │  ├─ 27c933539aad19458da3d7c55aec7703c6ac09
│  │  │  ├─ 351cd0d3065b1aa18e420a2a6d8bcc26d9f152
│  │  │  └─ 6e672fe7c24f5c85fca6e693f28e8651178fde
│  │  ├─ 4e
│  │  │  ├─ 0c66f3a5ebed4e319957b685f76b636ab74a81
│  │  │  ├─ 203742b1c8710ec7a06025c5e1c3b676b04aed
│  │  │  ├─ 56f23c344a8f1f46d8c54e257eeee0cbfd2e3f
│  │  │  ├─ 7a303e8748027b494bde874e71177f21d70dfc
│  │  │  ├─ a568562f55a91f7b6c65b0861281aff0b077df
│  │  │  ├─ a81b2ebb46f9b275ed6946e8ad21f0a922bb2c
│  │  │  └─ ccaf9ae8d88808ffe54b8248db969b753bf1af
│  │  ├─ 4f
│  │  │  ├─ 05b45849729d41c1b47d5cb820e9f420fddf02
│  │  │  ├─ 2a07868ca82c730339baf21c6f013e3d39b6d5
│  │  │  ├─ 4a64a85bfccb54387ef6da98da2a33ccd17053
│  │  │  ├─ 50d7909062ee4b79ad04bc791dd919fc3bbe11
│  │  │  ├─ 55a18906e0514c12f92d6e37bdf62f8f13097a
│  │  │  ├─ 8925fa8f1132fd0ffd80abb4dd3c8b96cc68cc
│  │  │  ├─ af25387bb48c2e91c7bfc7e5336935dadc5efe
│  │  │  ├─ bb2413d80a8b4c1b6c6b6fa7914e6dc6a10947
│  │  │  ├─ e6a7e33e282c215ef40628ef35795daec1f4f7
│  │  │  └─ f99a0a454e5a29846e5406a7cb325671cf116e
│  │  ├─ 50
│  │  │  ├─ 0cc2a61d20fffdf430805fb4b19403bb7768ce
│  │  │  ├─ 0e8d040d7a5b4a7449cecbe08157783a80298e
│  │  │  ├─ b1be65cb4ce673d9b896489f8b3b6ecc3cc647
│  │  │  ├─ b242c249c7e0b8ef60d22e5fdf85ae6e722982
│  │  │  └─ bd6a694663e1c2d4eb00fd5dde447b1c2c1c46
│  │  ├─ 51
│  │  │  ├─ 2a0e0ef03aaf535d576412c41639d188117237
│  │  │  ├─ 403b560c0e91309ca63da314405597ee2bae7e
│  │  │  ├─ c8ae99672bef1f6eec6c2f61ffbe99214264d4
│  │  │  └─ f0f7b4e561c74e59b84613445e585b97855490
│  │  ├─ 52
│  │  │  ├─ 51d4699805670a0b7b7d424820312c007435cb
│  │  │  ├─ 5e5d17bc42961fab7c0280e42e213aad6813b3
│  │  │  ├─ 7f40d06e607042e946836b4c39d43a8145fe01
│  │  │  └─ c89715d605f2a36704132a391320a457280208
│  │  ├─ 53
│  │  │  ├─ 144cc168a62a117ece30d9d3a60b1834128ea4
│  │  │  ├─ 37773bab7308f13cf87ea40ef43c9fdc515bcd
│  │  │  ├─ 39556f560eab86861d71d975cb98eb36f825be
│  │  │  ├─ 7306b0712bc26c15e3363d5d32e95fe30091bc
│  │  │  └─ 8136ac0fb5d0cbc3b8f7062d6d3e03316c9361
│  │  ├─ 54
│  │  │  ├─ 5dcb0b64ad27d458279b4836f5ce21ba3a3764
│  │  │  └─ dbf50dc9ce03ff28b7523c84cd0baefd28bf57
│  │  ├─ 55
│  │  │  └─ 50ff7ddb235568de078e22b7d3924f9761bbd1
│  │  ├─ 56
│  │  │  ├─ 5fea21fc2d1e1c2028f3cfbd6c1fa2ef03d5b4
│  │  │  ├─ a30aca87b216e59ea8607f2e043da52b97cc41
│  │  │  └─ bd5c402a3d35912e01ca433076c9b1c8ef6a43
│  │  ├─ 57
│  │  │  ├─ 3116f0d53d3112a491747953063a9129d57e3f
│  │  │  ├─ 3320217ce9a6c5416be4c10f6661f88cb1687f
│  │  │  ├─ 93a3da63a6604af5ffcf365b57ca69820e2067
│  │  │  ├─ b06d3a7bee20912341e4a1b5ab860b8456125d
│  │  │  ├─ ba754b992d2fad0141cfffb6b42f9a7a9a5191
│  │  │  └─ fc122a10eddd40aa360bc47bda8ffe756735d6
│  │  ├─ 58
│  │  │  ├─ a7626f9057de539bea32998d3527f0d8da2700
│  │  │  ├─ b16d6986d0ed044636cc89c06f34caed54f39b
│  │  │  └─ dddd52622ae29d1463c6e0801e8d822cc5cfe6
│  │  ├─ 59
│  │  │  ├─ 1d4bc696d85650f449f6915c2a8c48b223d286
│  │  │  ├─ 4d053f8fbf64b2f4204463d476e11fbdad0788
│  │  │  ├─ 8409cfb8d6edee0a55a88f30b1434f575502cb
│  │  │  ├─ 8dbcc344327557e5fd36cafa2234bddc5ad26b
│  │  │  ├─ aeb49bbc9c2a3b80a7604eca4a1e6af6b7a373
│  │  │  ├─ cf87e138d3fd5f630cf6125215d2314db28dd3
│  │  │  └─ f799b7480b0d20cf706ea98060786f2449fb42
│  │  ├─ 5a
│  │  │  ├─ 20f1d8954cecb537143c137e9be0ad808769c6
│  │  │  ├─ 2330c1415c2e07c7b391db59e2d60da215eb54
│  │  │  ├─ 27547369479ef75b934b1501af0eb8604ad530
│  │  │  ├─ 619f37996e08e88b4e4d771805b6bc51f9a062
│  │  │  ├─ 89a21cd25338d685dca82bec1e095f6cf75ec6
│  │  │  └─ e9b2d89301ea72068b3f4020eb5fdf7745fae4
│  │  ├─ 5b
│  │  │  ├─ 357c03e22d884cac1b78351c5ef66f2da9ea8d
│  │  │  ├─ 832c2a6056526473b3db72518357fe57290cbe
│  │  │  ├─ aba981c9c6927a2a89dc5d9e92f2bbcee774cd
│  │  │  ├─ b6e1138064f85d598f4060e29820fb8d12f8f0
│  │  │  └─ c0c177876a81aee3deeb50d4c5c3b47ab20ee3
│  │  ├─ 5c
│  │  │  ├─ 0388e677a40f83c7026df365185e52f7001b85
│  │  │  ├─ 090b973afc6e2e3b9ee7cfdca9b6071598b0eb
│  │  │  ├─ 495f273083282d3efc0262c0f3a1ac8ddb5a70
│  │  │  ├─ 4e4cd41c0e113b5f0df2139b9f3d57ff174220
│  │  │  ├─ 574928ca62232cfa2b136b4073b73a298234af
│  │  │  ├─ 776ef39276e5e77ed75aa10d7feaecd2b96254
│  │  │  ├─ 777d4275c335b6469b446121b1d6a875c36ed7
│  │  │  ├─ 9d54b666fa68c564a8ccede54ad9e22b5a2910
│  │  │  └─ ac7f69a5c5ae59416abbc923ff209c8a64d469
│  │  ├─ 5d
│  │  │  ├─ 0e466a203d40bbf9b5fac986aa5a929689b114
│  │  │  ├─ 17740b8e36906b807a05fffe8c3653cfcc4dca
│  │  │  ├─ 43a23b4c1e20d578f196d17e1998277f088de5
│  │  │  ├─ 60c649dcf50bc568ce99dd369001333f7f14bd
│  │  │  ├─ 9a820d4c4a5075def3219879a2bcdaa53e8274
│  │  │  ├─ 9ccc2270594823a993033528258e4022e8503c
│  │  │  └─ ae520fc719709582f368d237f32139384ba86f
│  │  ├─ 5e
│  │  │  ├─ 094f70f2ed5e0f2f6a0d510a30115c23ae2473
│  │  │  ├─ 1aee696eb524191ce83d3bccf5c03cb103d444
│  │  │  ├─ 2bb068bdde73ad895620d5f34a1c3981c85ee5
│  │  │  ├─ 5eeaf6ba624cca96c98ca61425fef1864a983d
│  │  │  ├─ 9f0f886acb1132d01bf45ab3aca99d599ddb46
│  │  │  ├─ d016b624fbc92d74809895282cbabf193becea
│  │  │  └─ f068360c0c0dda908cf870193170e63c4936c7
│  │  ├─ 5f
│  │  │  ├─ 2373a996955819125a83e9443cb33689d3d17d
│  │  │  ├─ 23d61b3c063f0ac8e96f7b357aefeaae65c87a
│  │  │  ├─ 48cd3c890abafb080bf3c0d0e81a0bba9145a8
│  │  │  ├─ 4b2f84d0ff4885ff6ac14bdb9d75d0bfc41d12
│  │  │  ├─ 765459c428e58b034b4d8940b28033a3c6fb18
│  │  │  ├─ 9bdaedbb8b3f45426f7fbbd015fd72d2c4547c
│  │  │  ├─ c5c2ba9ec6c5eb97e9b5845bb97a5d408194f7
│  │  │  ├─ cbc2b3ec7c53e95abf87f2920e7dc0e44c6c03
│  │  │  └─ df50f800786faa1c6b9e2348de87acd33fa955
│  │  ├─ 60
│  │  │  ├─ 204648a5bf1eab72677ef362d6d0f91bea9839
│  │  │  └─ 3a44f84cfefdffe19020dcd585d867120cac43
│  │  ├─ 61
│  │  │  ├─ 38d12f710aa372495de17fa9ada5f98cc19fd7
│  │  │  ├─ 54bf6b221125ce2c1fbb9facd48d62296c49be
│  │  │  ├─ 72b4c939f6228fb9d57a001aaf2073b30eabd9
│  │  │  ├─ 73a8a68e76876f571761ef1606d80a390add7a
│  │  │  ├─ ba293136bd6ae0b472dbc247326e15597cabde
│  │  │  ├─ c5e11bd239956331715dc2e720d325bf17b62e
│  │  │  └─ ceb8809568331d2f57793798293a60bd06f37b
│  │  ├─ 62
│  │  │  ├─ 3d13fffa59b623779b3ff0d04a7f7396dc7fe6
│  │  │  ├─ 476edd3eaad983873ca4cf5c3cf548eef51279
│  │  │  ├─ 5a0fdefc3aa4cb4f3fee9c2469b13b333ac786
│  │  │  ├─ 6c7bf8f5476ec55a2c4f0ca31a4ef8fe1501b2
│  │  │  ├─ c1ff4c1d6048f801da65a29039e76539cf899e
│  │  │  └─ e6bf7051447189a1bb877a17dac87707f7f0d9
│  │  ├─ 63
│  │  │  ├─ 6ad1cfd65d45eacd977de916e9aff32152749b
│  │  │  ├─ 9fd152ae05985047727e05cc4e83cf34fd6448
│  │  │  ├─ b207acc01eed8465cb97dffd95def920e79e14
│  │  │  ├─ b21e953edb2626d7dfe4c9f87a45d0b785d342
│  │  │  └─ defb3d9c5063e96f647886364f46262773ec38
│  │  ├─ 64
│  │  │  ├─ 728c25cd45bf675ef25aa2a2123e5e7fd8537a
│  │  │  ├─ 74b9ba0da4d3a1cb702decc3c7d2520660e935
│  │  │  ├─ af106d44829ebdc2e74f978c990eca0906f76f
│  │  │  ├─ b69fd5ef17afc5cac9fefc92df1ae7da7bc26f
│  │  │  └─ e8c025145df931d9366ecd33e785df0807adc8
│  │  ├─ 65
│  │  │  ├─ 24c16455e8488f95b526e4dd2b9f32b88e0b65
│  │  │  ├─ 534aa7fbd600717d8b331342e24d1878b9098d
│  │  │  ├─ 801193645930883ba34f7072a9eeaf8d574809
│  │  │  ├─ 8656635cf06a0ff087dd37d0d5aae7c0f40b6a
│  │  │  ├─ 93bb7507aae884f3111a7d8e96924b32cda406
│  │  │  └─ c6c46571d0870fad39ced3ccbbdfcadb658a11
│  │  ├─ 66
│  │  │  ├─ 0a640a42675c24989020fbea00b0a7c46ebcfe
│  │  │  ├─ 1a75aab21260e5b370df11bf8192654029d13a
│  │  │  ├─ 2c07f67881a6f552a83f21f84eeb8bd1e4f95f
│  │  │  ├─ 5b345cf094bd802001b3272835fdc1cf1be345
│  │  │  ├─ 7a467ec3490cfa7e510d95976b41775246560c
│  │  │  ├─ a8cce4cc4e7040585a7bde9ee95afd311f8bed
│  │  │  └─ f9f3b45eb77dc08e5b260a727639b9d2e71652
│  │  ├─ 67
│  │  │  ├─ 1e2a6ee446ce30681ca6dac32a691433eb19e5
│  │  │  ├─ 2ac7a8741e5bd1c1aab1924af9c0478f1e4876
│  │  │  ├─ 3dbc73f30cab3aeb3cac5cb1cf58c308ca84ac
│  │  │  ├─ 796283928152e8cc1b34bedc6e091fcc9e735c
│  │  │  └─ 9fce59f8d7e2b338f490d4e1ba7cd13cda86f3
│  │  ├─ 68
│  │  │  ├─ 071570470f10bf53e553431c85e61f6e0ce29e
│  │  │  ├─ 17c5e255c703fd6f74fcf24ff89e03e0e68ee2
│  │  │  ├─ 1de512dffb7cc07264e6e42aad3b5017ed9155
│  │  │  ├─ 25bc497b320e95236b8793d3ba0e09049d8d0e
│  │  │  ├─ 534946b4f5b173d6973c4a01381bc6f2d2b0ea
│  │  │  ├─ 69bd7b0b5052d79ffa26a02887ab3818d17bd0
│  │  │  ├─ d24f38de8c6f0c68d5cada59a61b6dd1624069
│  │  │  ├─ f0f5fe8e9a4a3903e7ee21ef1aa1ebf6dd47a5
│  │  │  └─ f3a7103d67250e37845cafa92dadc2d60db5d6
│  │  ├─ 69
│  │  │  ├─ 0ef4a86723817f5f58659e19966fe8d29d0aaa
│  │  │  ├─ 2a4dce665294ac20d046c2912ec74dcd449ec9
│  │  │  ├─ 388f13d6c8be29378c08ea2c4c9ebae084060d
│  │  │  ├─ 5a076f907e4ab0084dcd4272b11f1416510538
│  │  │  ├─ 5d958a1cfcb0b5fc39bf639ce50a7a1320b788
│  │  │  └─ 7fc94d7a34b37b5aae41ceb945fde7335de5ef
│  │  ├─ 6a
│  │  │  ├─ 8367f493a435ee83587c01c647f2d3f1f38e70
│  │  │  ├─ 9147fb97f92c19bb6d6b6056d1a1c33f478383
│  │  │  ├─ c579b3be53c13525a701ab4d7be913926aed82
│  │  │  └─ e74e6e7e206fbc2874ddb4d98acd4748af78d1
│  │  ├─ 6b
│  │  │  ├─ 45c8665fbec3b91712f59814a7c35893918c7f
│  │  │  ├─ 67d9936d1ec841b28eb828bc1e76616e4f496f
│  │  │  ├─ 857578660dadc0123a8d2956fa77798478839f
│  │  │  ├─ 913ecdeb61c0086d77881c263c70a77ba1e0d9
│  │  │  ├─ f226902d168641c32a46d506a3f97e846f88fa
│  │  │  └─ f4c58d0002e7750c5d6ad372727e369a377015
│  │  ├─ 6c
│  │  │  ├─ 11f15ba238150c2c318eaa15013288f9f9c115
│  │  │  ├─ 24a791c480bbf39f0762c185a13d5bf2946b95
│  │  │  ├─ 820fe02b8d633f185593ae6d05a27aba4e7e5c
│  │  │  ├─ 9ed17fe339ed9ac829be7968a0703c7c94cc70
│  │  │  └─ c90568079fad34b75aef0a553f7d06b04a83a8
│  │  ├─ 6d
│  │  │  ├─ 0a45736c001d098a7f9765e35d7d4e2928f5bf
│  │  │  ├─ 0fd6480cfe52148864f880bc01d7d7b3e6e093
│  │  │  ├─ 266a9830c93974dd9bc5f97381fa9fb8215e20
│  │  │  ├─ 420b3e3bc02198dae246696ba11679a8d93884
│  │  │  ├─ 4564fd7542559f956ccf7939ccfab0c1cfa0a8
│  │  │  ├─ 772a707a0de8669a157ab77f27d3b164ddb282
│  │  │  ├─ d790c16dfa2371424477a905e8c130d4152f05
│  │  │  ├─ d7b69931c493ed392cc55621c78d974a2cd06b
│  │  │  └─ db859f75ec86787c16d627be036aff0d40fd7f
│  │  ├─ 6e
│  │  │  ├─ 1fce41623cf9e0a0c7c3f6db5b57cdfdac8ac1
│  │  │  ├─ 3d1d1631a2579a9574c8df4a9a7d7c524446a5
│  │  │  ├─ 5a505624b183e6bb1e9480623937f5a00b3e17
│  │  │  └─ 71f6783f88129cda2f6106bc6548a6deef7cc0
│  │  ├─ 6f
│  │  │  ├─ 47e36018b2ae8b69cc403b6ca3947affba24b6
│  │  │  ├─ 546b3503058dcd88deb5f25fb1efebf7dd8682
│  │  │  ├─ b72b9d56878fb08912cc9241576eea576ee882
│  │  │  └─ ec5997921be03171fba550b997393f012bb05c
│  │  ├─ 70
│  │  │  ├─ 3f655fbde747f0adf4f366ef5ecb7bfb8716b1
│  │  │  ├─ 6a3eece5480f1d131b405f5574c33f59a6876b
│  │  │  ├─ bfcc0bd339f38a018badb69cbfd6453ce23fc9
│  │  │  ├─ cb308567af0b0f39a91febfdae8370751d4137
│  │  │  └─ f4c099e20d9c6d80882959bf00ab55fd9d6add
│  │  ├─ 71
│  │  │  ├─ 113179c4c8f867244ea5e4367cb40032d5b819
│  │  │  ├─ 8bca5d976175b1d3e326f150df982bb587a2f1
│  │  │  ├─ 9b3d71c92f2fd430e612c515030b010cc60963
│  │  │  ├─ a4459562c3aa20f4c46cf929022f8b4b9d36d9
│  │  │  ├─ ea0bc7c6fac067a6f4b5d168490d656583b778
│  │  │  └─ eb52be3cb3f7e6dacea58e908ac5f5c838e3c7
│  │  ├─ 72
│  │  │  ├─ 1663344cae19f1c5ce76bb1c61a450a3e7f25d
│  │  │  ├─ 26de6576707c8f1cbe4dc9799abbd445f9e8b8
│  │  │  ├─ 3da6b56a062b2dee751ef3a7261a3377095844
│  │  │  ├─ 403ee1bfe5e2b0f7ef21a07f1967134db287ff
│  │  │  ├─ 714640f89d26c29edae5e9d56b526ef4e06d0d
│  │  │  ├─ 8682873e325067284eaa90d0ea805939fa941f
│  │  │  ├─ eac8b8632f391fd90242562f762d664587a0c0
│  │  │  └─ fb1aa308779cac9e33d6b6817f2b8c89518674
│  │  ├─ 73
│  │  │  ├─ 0a39b2d450442fa6d7b3594a48904e739930dd
│  │  │  ├─ 120c292f3175274f11e97f97e860727b028347
│  │  │  ├─ 487b0a9cdb768a6958748d61fa4fa81ab3dd7b
│  │  │  ├─ 8f0010da2588564f2f15d1cde52cd7137553b1
│  │  │  ├─ 9e4247431419fb13161f35beea022988be3623
│  │  │  └─ fdb346ae0e20477334c29d238cdaf91e4418e9
│  │  ├─ 74
│  │  │  ├─ 55c5f199afaf8b28391c5b12022c80a44d5491
│  │  │  ├─ 64079ff08446bd54f35ac4558435ca2c4220c0
│  │  │  ├─ 822e1b847f631dacefba074b0b15f51c8f1ea8
│  │  │  ├─ 9cc7e1cdb25ed6407ade7cda2f50ecc9d2a735
│  │  │  ├─ cf31775a207a6f42c2f23672c1baa032ad226d
│  │  │  └─ eec2e0f23f24d963dbd020c1aaf610197a2eb2
│  │  ├─ 75
│  │  │  ├─ 45fb5f3042725538379f270722fd0bcbeef8cb
│  │  │  ├─ 507ba186dca454010204a2ff3ae05bb8bac59c
│  │  │  ├─ 5d9135a5c46e2a08d52ebc21c5dc72e377a85f
│  │  │  ├─ 771d9a2e2d81558cd216d12fda824758a3534c
│  │  │  ├─ 852e8ff7e85d79456d1a7c83d20c9dccd08f44
│  │  │  ├─ a6e35ab42a121c4251ca289415efe534c792a5
│  │  │  ├─ a9caf9f1e362b0ebb7e9182faed94636d5e77a
│  │  │  ├─ ca1107fd00bfe25f7112c4d9682f639e906dc5
│  │  │  ├─ ee9ebcabddec667fe3b2d44c76d6a9648c11b9
│  │  │  ├─ f242a4d0dbd11f27a4c696114d2c00ddcd5d34
│  │  │  └─ fffaede247a8423085c3e7583de70f0a21ec5e
│  │  ├─ 76
│  │  │  ├─ 02429e959ce357c3f85cda4f37dea88acc4591
│  │  │  ├─ af8c97ba7552dc69c2182f95bc5e84e5ca887a
│  │  │  ├─ bce27ff152fbf6df37f5965f6e51dd668d1038
│  │  │  └─ cd6db4509b524b0ff2d9846102ce22509b3190
│  │  ├─ 77
│  │  │  ├─ 4be11e4f784f6a6050d22de71f160ca8d8c4c9
│  │  │  └─ eb4c24cd65758cb85b5667c7515aae0a8b1547
│  │  ├─ 78
│  │  │  ├─ 0b5275493aeb7d7e2d6fd7bb42ad6879c3bb58
│  │  │  ├─ 1f552d0b8c32dba54759a94dbc6fe972faaeca
│  │  │  ├─ 27864a6019c1ca878d1ffe89fad681028e112a
│  │  │  ├─ 567d353cfd431e74b74955a36ad8f6b775fc9d
│  │  │  ├─ 5dececf5c06faf3ab821aa593e7a9c312e225b
│  │  │  ├─ 9ce9a2336e9710c15e85a875152098edfed0d7
│  │  │  ├─ accb4399f180ca2e161d3570709b0aad028c2f
│  │  │  ├─ d62df9ae22c966f1a468e23b8b302dcf97183d
│  │  │  └─ d7c1ac0d1253fc5383483824369e560367148a
│  │  ├─ 79
│  │  │  ├─ 1a7f909bb670c1063df4f086d5ff69962fa062
│  │  │  ├─ 1e4f3c2a84b8f6aa069d50d968e12d163b1e83
│  │  │  ├─ 416f139a6973dd422e0441f3f3c1d5509cf54c
│  │  │  ├─ 805194416181e13a61d83f71a8dcdb96f912fc
│  │  │  ├─ c18b2c983437abc2949ed30720856c5258f363
│  │  │  ├─ d52cc4c3b43925ec22aca6ce678b10a35e88be
│  │  │  ├─ e57365f216819e66c4465f8f245094fe04673a
│  │  │  └─ ee1f7e52d2899dffc899bcde54811f4b53bb80
│  │  ├─ 7a
│  │  │  ├─ 06941ad7970a02beda07f3c9492a8c60e681df
│  │  │  ├─ 1d4b91707141046cccf5e7df877c82b0c51470
│  │  │  ├─ 4e146e93a4d486ea1242d7b867db705c728bd8
│  │  │  ├─ 627e28dcb6d4fe91e019c51ce5926b19803d9b
│  │  │  ├─ 8e618a3c9b97effc580865b0fe97204020637a
│  │  │  └─ badbbe3c0beab5176d8c9c08bc72a7447c065a
│  │  ├─ 7b
│  │  │  ├─ 06acd6b389bc51b4ccc8055820c965037d1426
│  │  │  ├─ 4287958459efb0b93b16e0f5992e381aea4fcc
│  │  │  ├─ 52ea649c76f2ec078e965276e17ddb08f1054a
│  │  │  ├─ 59d48e327a9b91d578b79e3c4cce270cbbe510
│  │  │  ├─ a58d483b7786e7bcfad033ecc10007015d602d
│  │  │  ├─ c6f576ac41c9a4c644658c301513693862ee2c
│  │  │  └─ d694ec3190a3e3851ea27e7273a4927d4dbd89
│  │  ├─ 7c
│  │  │  ├─ 0693379756f31c2a8a86c98373a1b894214241
│  │  │  ├─ 90514c7482a9ba6e044b34b8cf3fffa11bd44e
│  │  │  ├─ 96e93eeeeb055fc321efd130781f93e770b7dc
│  │  │  ├─ a193dd3d5d6aa5eb82b39f528fe5302b388c2e
│  │  │  ├─ a491b50734d3abf8b25bfe309c8e6dc6569310
│  │  │  ├─ acfd9abd5c54801a68fb56de80a2eef67d8fb1
│  │  │  └─ c9761eaa44dfd3096eefe1b9190c2a85e8ec58
│  │  ├─ 7d
│  │  │  ├─ 1d97b22b6e57f506eac99765a5a999bbbd0b1b
│  │  │  ├─ 4d96c385c47159f83cad567bb51d71bd734e69
│  │  │  ├─ b1d7234a1a2cb914f019d161e88ea78b3fe629
│  │  │  └─ e39e92ee8d13a4b850920b7a950a10c745be30
│  │  ├─ 7e
│  │  │  ├─ 01d795099114ef397f61b693c13eedea90068b
│  │  │  ├─ 1a04db5c0e1c8d085c3451343616ceea38dea8
│  │  │  ├─ 218e22be013f1ef6771324b151b10d27a7ff4d
│  │  │  ├─ 893b667d1cfe02acc7e16191dcba56435ea2bd
│  │  │  ├─ 8cd55f30e765601d6e25e66ebc1921ce3ba808
│  │  │  ├─ ca486f1622b044e3b6444d5970809ca7f514a5
│  │  │  └─ d0247e565c1747fcebdb5dc175b7512312da06
│  │  ├─ 7f
│  │  │  ├─ 16934ddd0afe7776cfd1248c62921c828b0b64
│  │  │  ├─ 1d75446be03fc790b4c907690bb42b62cd1524
│  │  │  ├─ 4742ef7ec70cda61208e80b9b686a086b6342e
│  │  │  ├─ 4b7387d1cdd4663d3bd999a143656a559454ef
│  │  │  ├─ 5229bc93739b7c674d2fd6e13ea383d143f9d6
│  │  │  ├─ 998cf272c7fc044c6f251b32180442bdc9fb01
│  │  │  ├─ ac8ee5105756ee7786884f92d6ea79f9204a46
│  │  │  └─ dd01211dd059e6d21c3bbcab691a383d0f40c2
│  │  ├─ 80
│  │  │  ├─ 42cdb3faee118fa4795588b5e3b5b13d3c13da
│  │  │  ├─ 578e0624e7cb1716597425e065ef1839b91098
│  │  │  ├─ 7c83d2449c0a8452a259fd8b380d935d7b378a
│  │  │  ├─ 80849b031867fd85fe383fd771d442a827d7ac
│  │  │  └─ 9d0fa91557b3c80d875ffc4cf7f5b1df5965ea
│  │  ├─ 81
│  │  │  ├─ 038a369eeb53efcb5e32e4f0bb9ef0c3d1cbb1
│  │  │  ├─ 0a94d6496b9f8cd0a08efd5736754d02ebe666
│  │  │  ├─ 203a3045439843623428a299f28597ad222cfb
│  │  │  ├─ 319dac8530044e5754aa67b2d493fe0a813e0f
│  │  │  ├─ 3fbd8bf14e4b735a0fd05fe866b1ac2c268fd0
│  │  │  ├─ 9a504b9d7a5328dc89b883f21274f880711327
│  │  │  └─ f4d18fe8cbf6943b651da730cc64a20f34ca3a
│  │  ├─ 82
│  │  │  ├─ 22d2f3fcffb8b369bcd2670d340f580e912571
│  │  │  ├─ 5377584d26581864ab616ac46ddbbc553b185c
│  │  │  ├─ 825bf95dd12d4025af59754c3ba4e0e9b34895
│  │  │  ├─ 9328b6dbf7c0555d7bc2cb7f6cae3a19878c7f
│  │  │  ├─ a75f028d5f8c7cea0030f36db740be4e44b121
│  │  │  ├─ c38407c086d0c2be954a76ffe226c0d2763bdc
│  │  │  ├─ c7b684ad0671a9814e1111717cd244ca3e5e15
│  │  │  ├─ d8079eb412b62a231b8a81c38a2e697d71ed8a
│  │  │  ├─ d8aab1cf7e8bac99c6f06d18ed5d6c1c3ab064
│  │  │  └─ ee97899b42c9f301b937a2d44ac2008c940afb
│  │  ├─ 83
│  │  │  ├─ 5161ae59930bd63118f0d0e6114bff6c9da6e2
│  │  │  ├─ b03da1d3dac8b5cb5f8c657b371acb29852752
│  │  │  └─ ff755f5c001c232550d6a68145da1c2cd0b38c
│  │  ├─ 84
│  │  │  ├─ 28d64fc4624cc120be44de467411eb795a70f5
│  │  │  ├─ 360dc87cdfb1e187dc5baab74b2729996d4511
│  │  │  ├─ 6c8d3621ca5f0e8e2bf71a65fd443995380934
│  │  │  ├─ a2e8f093b9ff9b1bf2ac6f6b58ce8e3da31d1b
│  │  │  └─ bd0943eb7066065c10b0a01f711aa8a6aeee87
│  │  ├─ 85
│  │  │  ├─ 1b6f8a087d5f68a561e36fd1d037d94d367223
│  │  │  ├─ 1d3bbdad9c0ca300bcc31e5f3ffd963982926d
│  │  │  ├─ 21b6f85f910506c935981dfc8a1d0e0f5f0343
│  │  │  ├─ 4f30e3e4bf73670cecd93e21b52950396de9ba
│  │  │  ├─ 5dbdfc863cf7c5923bd0eb786f9825c7e00da6
│  │  │  └─ 7c29c4b431efc12d4af5882aa057a766c15512
│  │  ├─ 86
│  │  │  ├─ 99dffac75a19436563731be6f94144b0f0cf41
│  │  │  ├─ b9364566ca4d8a1369697c548602e235d63d7b
│  │  │  ├─ c5442e6d5510393e9ed76a05902bcfff25e361
│  │  │  ├─ d6b20a1e13946750ca7016a2837305e28345dd
│  │  │  └─ ee00e92e3e014d9ab5f15b2eb1ed26ed4025d0
│  │  ├─ 87
│  │  │  ├─ 648a45ddc7ec6cf3df6f3ae41ec0f8746bb3f0
│  │  │  ├─ c49e9ceda0c84579286487dbbf9d225849d73e
│  │  │  └─ e6a9f69c92f76af6ae569d078222740f7638a8
│  │  ├─ 88
│  │  │  ├─ 3ac023a0fd5812080fd132d0fd2894623089c3
│  │  │  ├─ 7ca906f3999afd61e81ee5ef79a98c8dbb93ea
│  │  │  ├─ a7c698a1b566275420d0c339ba2dd3c2c9665b
│  │  │  ├─ d2320492cfc0209050c9610c1ff56f751e7294
│  │  │  └─ e5609dd096be87b08e3530217271607424ea3e
│  │  ├─ 89
│  │  │  ├─ 51056afde123c9a1ed7133f27120d6d7e38319
│  │  │  ├─ 642c65774b4f05875e7aa5577098db415216a2
│  │  │  ├─ 77d5d7047f1a2db87e8e723293e4bedf85de45
│  │  │  ├─ 95178ca2bdf4ccbcd6da0cbabb3741244ce8bd
│  │  │  ├─ ab6c137c6913c3a88de9f24a2deb183bbe81f0
│  │  │  ├─ ca75ceb2f27761bebfc54e6d94c3177267d83c
│  │  │  ├─ cd591bd14e31f0b7f55afc76cd658b6db15f16
│  │  │  └─ eebf0e917adfd0d6ee0e8455a189d58668eda8
│  │  ├─ 8a
│  │  │  ├─ 1c6ae2866208e89935a38f7223d63b0f58e81e
│  │  │  ├─ 8a61a8744feca4c91853d4f4d027f00a797796
│  │  │  ├─ 9b219d363d44048a88378fd8e768aecc88ed52
│  │  │  ├─ c3edea6a6251e25f9d0333c034c9ed93acdba3
│  │  │  ├─ c97b496e9ff0c89a3dba7a22bd8b17ce7c3333
│  │  │  └─ e0274efdde3671d59fab43d18a89555f0463c2
│  │  ├─ 8b
│  │  │  ├─ 26a0771f5c6d7640c7a3e17e86a7a6fe3cf739
│  │  │  ├─ 31320cbeec7d3e945215ae85d140d85d6a6ea6
│  │  │  ├─ b416addb92d9f8b9d9a24a42bf015b57795e04
│  │  │  └─ de37c969fc912e1bf8e157f5e46f8641e2571f
│  │  ├─ 8c
│  │  │  ├─ 02ced8579d6984c547e03a50f98c72ea6632c8
│  │  │  └─ 6d6a0a4aa5b022f09a52d27a971b6ff5fc65ea
│  │  ├─ 8d
│  │  │  ├─ 1ea9a53395cc76f41d440c3a7c016834213e31
│  │  │  ├─ 24b96866ab2b147fe0d66bd7285528fa283c99
│  │  │  ├─ 2d81037c250e78e9d0afe19b728419933d7f20
│  │  │  ├─ 67b142d39ed1bbe6847e9bb090752b005441d4
│  │  │  ├─ 6acdd95ced896edd8e11ba4403ad9133a7d7d2
│  │  │  ├─ cb9873d47c393dba37f2e50a1d9f17de05b75e
│  │  │  └─ e21f73dfa6ebe8389c17b1c8d3be62bf88fa28
│  │  ├─ 8e
│  │  │  ├─ 0819c276895cd80a4f14df8552ea144da8bd62
│  │  │  ├─ 0d36b0ef4d21c96be62b20190bc114edf1573f
│  │  │  ├─ 44359e37ec1ff1ef2f8ac64d56dca0770ea15b
│  │  │  ├─ 54232e59a370f71963c6743b4dac2ad6eae5ef
│  │  │  ├─ 819286d0de437458f960a3fb3035039587ac24
│  │  │  ├─ 8e7b47c1ed4aa253f666a2621374952ca55889
│  │  │  └─ c2abbd7082a5f000337044a2e4e88e5f9d331e
│  │  ├─ 8f
│  │  │  ├─ 031d3cfd8244737df44e71050ddcbe64a734c9
│  │  │  ├─ 76c617e0e3b027dac7af04bf4079215b96e305
│  │  │  └─ ac93ff24255270479516f8bcdaa66c20aee7e8
│  │  ├─ 90
│  │  │  ├─ 4406a910f5e2d12e6b04a45393636c5b17362e
│  │  │  ├─ 5e3ce716c5d945d585e3e0b7178094f80fc65d
│  │  │  ├─ 983dc77cf5a5e912152f15d76b4d98b362cb95
│  │  │  ├─ e181e3dbde92d09fc45989eb0cb3506cfaaeb5
│  │  │  └─ e2bd3ace17a8b94a3132b46e8e3c89f98d5140
│  │  ├─ 91
│  │  │  ├─ 60321a9b1a7eb543464f78b4348f2c7c8c6ab1
│  │  │  ├─ 615432f4e2c43123df8c6525b0edd0a20138cf
│  │  │  ├─ 924873f3fc3d20699e82d2eb02640126b265e8
│  │  │  ├─ da1e95ae85582509d4d59609e20dc7f809ff25
│  │  │  └─ fc6e423c25c4540d1fe3c13d2f9eb98cd08900
│  │  ├─ 92
│  │  │  ├─ 099e63b9ab890cdacef42b4e979ff3766e5585
│  │  │  └─ 13bdb0fe9dfb33cbee86af9b8abaa62044b8cd
│  │  ├─ 93
│  │  │  ├─ 535f56d4a87863673f07c8b470e3cf42862345
│  │  │  ├─ 544bbd215ba847446973c9962a8a39de0c8578
│  │  │  ├─ 9566a467cf1f4d01240ec56c433d235cd63dbb
│  │  │  ├─ a6167fa9e6fcc5ed0bf39cdef54edc4bf34a59
│  │  │  ├─ b17d2f3818c601e27af886d41fdb1a2ef12ad3
│  │  │  └─ e055dc8438f45d2b57ad5823ebaa69dc83c99c
│  │  ├─ 94
│  │  │  ├─ 10782cad1fe07bcb5bdc70656387b479f51c46
│  │  │  ├─ 3b21431ec42ed3164605b0216b8623cc7d9027
│  │  │  ├─ 68fb4db7bd3f458a95ab748814b1b15a228437
│  │  │  ├─ 9bd15dc46ad16167ec0fb71c019abb1dcf942f
│  │  │  └─ 9fc6e46916171ffc963dbfc36720a445000165
│  │  ├─ 95
│  │  │  ├─ 39ccbb51b8d427e1742d62e115686d60193eb0
│  │  │  └─ 7ce5a01fdd37bcebe7e5d078a23cafcec2f116
│  │  ├─ 96
│  │  │  ├─ ad8b1d256f158f34468c51b5bf4f52f7a3c961
│  │  │  └─ e2e9899fe9762009332b105994e31621d6816e
│  │  ├─ 97
│  │  │  ├─ 52ddccafc44b68abb6f6b893951621bc5e43f8
│  │  │  ├─ 547012b239c911afc3235653a8ce1916f9e66c
│  │  │  ├─ 5e6a68b4a3b79838f36409b62f6f27bfe6cad2
│  │  │  ├─ bbba6fb6fc6fd835fdcde33455c30078e88c18
│  │  │  ├─ c98dcb9dda6edb90d6f79e12bb29dba1ab4adc
│  │  │  └─ d3323e6833cb2fc4167430a845440125a9232a
│  │  ├─ 98
│  │  │  ├─ 0eb69ae2cdb0716bf1201173a5420ec5800274
│  │  │  ├─ 1c59d2cdccf64c6b6420ccdf37e92b42212073
│  │  │  ├─ 419fba9d65a964ee49f3217cb0091deec3bf10
│  │  │  ├─ 44aae8a9d4a5e9bf191172a8a96393d1fd6a7f
│  │  │  ├─ 5e01a8df981c148e3544267059aa83fc56e08f
│  │  │  ├─ 5e69df9f863552a650d9ce57516a4089e0866d
│  │  │  ├─ 6343c95ff98158cd6424c6efd42efb18f30025
│  │  │  ├─ 787cca8a96d8ba6c84759f0813856182bf19b9
│  │  │  ├─ 80bbd1abb9f24078de1b6a85921571bbc724d3
│  │  │  ├─ cbc80ac72c70bea1e391e3337ae1f94a6e34ab
│  │  │  └─ ff65ea566bbc845309ff0da32677ea76136ea1
│  │  ├─ 99
│  │  │  ├─ 1b6f75c724affae3a629182fa0a2947ef90880
│  │  │  ├─ 4ebcb97900553ed646ceb0f2042406c7fdb9af
│  │  │  ├─ cf5401a0d57e033ad88a3a96a21e6eca3b4da0
│  │  │  ├─ eb27b434297e2c91851b4bc4ef85be98be1dd3
│  │  │  └─ eb7a378585baa13fb4ded1784497e4f3e82563
│  │  ├─ 9a
│  │  │  ├─ 2a667a18c59bf710e5d718d37f3f290db8707f
│  │  │  ├─ 47f53f7c0604b4eaa74b0ac8477481429bc418
│  │  │  ├─ 5faf0dd20e1647dd48bae2bf7c39d781da90eb
│  │  │  ├─ 97ae064746f5036abe63db8a806ff5956cdace
│  │  │  ├─ 99653ec5dc53ced73f2173ea1585894bab098a
│  │  │  └─ c4e1985901f3f7ac25c0dcc95376429ca9cc4c
│  │  ├─ 9b
│  │  │  ├─ 55830be694cecbd5cde164f8f75e8bc8e96c2a
│  │  │  └─ 7c0eb5cac6a9104dfe71d4490b58e6e536de3e
│  │  ├─ 9c
│  │  │  ├─ 1ff09b0fbae71eda7eab108b42b6d53e230b1e
│  │  │  ├─ 32d3268ee859a4d36553cfe6de17c116020e99
│  │  │  ├─ 36bdf943c7b8439105c0bc24fcba88ad7160be
│  │  │  ├─ 9fc847604a3d41f332d8547a16368fbbce8b45
│  │  │  ├─ c1b07785592cc31178d821d1d6b7b4f0352453
│  │  │  └─ eec6c1ba37ac2b7160924e89a8afe6525d54c1
│  │  ├─ 9d
│  │  │  ├─ 50c8fb42e21e47d45c1aca5a9a023c309c64a0
│  │  │  ├─ 5328f1697caed54db8ff9eeb64b43e52289b2b
│  │  │  ├─ 54cd1f4a6bcc1290899c0c0ad8c2a9d33089ec
│  │  │  ├─ 5971553166a39894843c90363cf7edcb812269
│  │  │  ├─ 678130d85865c093f6b096f6f672067e376bd1
│  │  │  └─ e9646bee5255278ef9bee0bb4c5668158579d8
│  │  ├─ 9f
│  │  │  ├─ 1ad8250791131035259ff90ea743aafeb4245e
│  │  │  ├─ 384af3bf07d995aeb6061c1d8eaec57c895b88
│  │  │  ├─ 41340e228675f5c7ee0d8cdc5e2f0f871b2b55
│  │  │  ├─ 5e7eb17ae76f1e1f6caf96c5951e6634f5db02
│  │  │  ├─ 85ed160e0100383e5253ef84c450d73f2b6d6a
│  │  │  ├─ 9bf56c3ba7468c128c140c8b5c86841ad93c08
│  │  │  └─ a9c25af42c3a18ae5f48f4f40ad2dce284d5f1
│  │  ├─ a0
│  │  │  ├─ 32b1840fec3cbaad00f5e90803778e08013d97
│  │  │  ├─ 8460b3b1408f06fc3fbf3dd39df76fb41324dd
│  │  │  └─ b61ce95d017e892e3425ddffe60f151146b668
│  │  ├─ a1
│  │  │  ├─ 1a2a7593e7a83fbd2588f84d81f009e48159b2
│  │  │  └─ f466bbdb80654e9f49d63eb725cc3db9500552
│  │  ├─ a2
│  │  │  ├─ 48d5bfb706238b176dab149d0a7dc5cac370a8
│  │  │  ├─ 7c8f401bd4b349f8cdca8362ed0e34f66d0c55
│  │  │  └─ 8804bea7efc9ec52ce7d9f944e72bd5808c908
│  │  ├─ a4
│  │  │  ├─ 148865009ac0c26dbdd7a463525531b4810cd9
│  │  │  ├─ 1a7f35e5d655919fac631583065465b885d5e8
│  │  │  ├─ 35f8fa8c7e0cb6ac29b0600561b4252da3459a
│  │  │  ├─ 957c377991668c510e04dd259b63ceaaaad99d
│  │  │  ├─ 9af1ba25f4236cd034dad0c9642c8ee5b1bdbe
│  │  │  └─ aa511b9a49217c6a94e47ba53f1615beea7b19
│  │  ├─ a5
│  │  │  ├─ 007d2123e2952f587f81c3def44f79ea06acdf
│  │  │  ├─ 47646d47982179bdf24c92d263f25c1d7f236e
│  │  │  ├─ 5336fb5741d7aa6dce9df6d63c221430dada8b
│  │  │  ├─ 5ee730af93bd7ef006d636271f026e99e5e264
│  │  │  ├─ 665b8e1bc7b477b6aed5ea891d6acf0fd739f3
│  │  │  └─ f2b6112b077aaf69820387909f0a3f84e25f01
│  │  ├─ a6
│  │  │  └─ 3a4396a41e9750bcaebde8ed8d0c915f028095
│  │  ├─ a7
│  │  │  ├─ 0d3aa1977bb65144de2d89fa82ae9cb93e3dc6
│  │  │  ├─ 247ab4a8c709e11d2be0732e3ffb8751ceb382
│  │  │  ├─ 59202af4ac4533500ff3ba1cbd2e2ee4324bcd
│  │  │  ├─ 7801ff19729ff7639c904ab8bd05584b39c095
│  │  │  ├─ b358bb73d78b25e640e2dbf5917cb6e4940d4a
│  │  │  ├─ bffdddaa1320f2af9131a34e9f0eb2ef01f79b
│  │  │  └─ e5bd040faca8cacadbf77046bd350fa0ab222c
│  │  ├─ a8
│  │  │  ├─ 11853c0198d0913296b4ecf9b84e2fcd0c4b9b
│  │  │  ├─ 3300c5eaeaf08729deab80ff60b21b509454f1
│  │  │  ├─ 70bd59bb5cc0a1b70d4f3943277a1f7a0e386a
│  │  │  ├─ 7f8468b13fb30f2a6e5504b2e2cf6e03c66111
│  │  │  └─ f28af23e3d640a81b835e4318aff34f1e8fa13
│  │  ├─ a9
│  │  │  ├─ 1a5b2aee95fdbf82494262b1cbe37974cf965e
│  │  │  ├─ 1baa8a0a027d9b376ae6e4cdfe3f8d4232a724
│  │  │  ├─ 22aa1fb246b9b2842844a57249eaeed636b88e
│  │  │  ├─ 2f212320490701601f94d81e07da2d4c20ac09
│  │  │  ├─ 4f543a6c111c359c8f584e96871d296b15cea2
│  │  │  ├─ 6badbdbc87cac2bad1e9edb4ed8d233c54c7e0
│  │  │  ├─ 855937a0ddd627662cfdef40101f96d81926c0
│  │  │  ├─ 88afabc2b3347fe622ed53b2f6399902ff029c
│  │  │  ├─ f1248c0b18d39d7588f9be41fcca45005da790
│  │  │  └─ f3d575b9aa880fa8d083d8b8a1879d358212a6
│  │  ├─ aa
│  │  │  ├─ 2b9bd380b3fd9dd846bfd252c770782eb95b45
│  │  │  ├─ 4096de872e1302c746065fc57183827c332924
│  │  │  ├─ 59958f83f8a1027797e87a27ea123d2ea03f6c
│  │  │  ├─ 6d809a44cc55b6b3af60be0008232703431060
│  │  │  ├─ 80fd2b090ba3acd2965c7f000638506cfb624f
│  │  │  ├─ 8a39e4bebe487cfe4073a251afd7e5c7e25853
│  │  │  ├─ aecb18269fb9af9915b0aac4d2c3a0b5e034fe
│  │  │  ├─ c61e06c7cdc7a7489210ae855691a47deeea0e
│  │  │  └─ de695912ce65b08b4b67e3a4ca794e12c75c5d
│  │  ├─ ab
│  │  │  ├─ 0c342e17a2e5fd586cd284bf21d6b25ead3238
│  │  │  ├─ 110c72269dd48b66fe2b716dc45ac1ba79326e
│  │  │  ├─ 33dbdef9c6810561c5c1016aa426cc352ef40b
│  │  │  ├─ 4d2fa122dd896dcfab0beb1f7a3fa55e5e20a4
│  │  │  ├─ 828ec075963c704fc1c9359533e1c366d87186
│  │  │  ├─ 9603fc87756e0a339588f2889026467cb4d842
│  │  │  ├─ a13f3d695696b8d1891d825161a1fe719c429c
│  │  │  ├─ b56c0b82fd40dc1d20dba2babf90d327c9048f
│  │  │  └─ f98989f996e483343095714a823ed1369008eb
│  │  ├─ ac
│  │  │  ├─ 334dfbd517c71e4c06145ccfd38ed1e40bf2c1
│  │  │  ├─ 9353476cfd515058a0c11cfa8683884fd1eeb7
│  │  │  ├─ c5ade0ba20fd335115638c66416bef4c6fe1f1
│  │  │  └─ ede91f8cac37ef959807dee51b2ca0d900277c
│  │  ├─ ad
│  │  │  ├─ 286a2f5365819897f3dae5ebbe19990ddb72da
│  │  │  ├─ 396079945b1f371fd05220a559e6ada0c2bdfb
│  │  │  ├─ 56d5a1fa26a06a487042242adcacb74e72a01b
│  │  │  ├─ 56d5fcb49e7814b273617946b2553f9791e8f0
│  │  │  ├─ 759c8fc4b7f9bb4d7db0dd98a24fb92772f3b7
│  │  │  ├─ 85202a2740a47af35770e16fec11b4194393dd
│  │  │  ├─ f309d2fd70789101b497c30ee1c65d0ae566e0
│  │  │  └─ f7720a210d9ba2ef0d0e70afab1357e45c37c3
│  │  ├─ ae
│  │  │  ├─ 253bc9b84ca002e8f29b4a463492cc84f76ac0
│  │  │  ├─ 4e1468c47caf890f3e455a873b7c552d7a856b
│  │  │  ├─ 947866253c84c0853f81b57f629a7ab2db5393
│  │  │  ├─ a9c866158180eaa55bedb6a74d759e7b4606ff
│  │  │  ├─ c65eb13273efc67ed9ce5124cadf958c33cf9e
│  │  │  └─ d4765bbcf8dfb085a3866ac7206ea4dabffd81
│  │  ├─ af
│  │  │  ├─ 0b12d57375d65398648d5df80ad8e7851fcd70
│  │  │  ├─ 3c93eecc7d3875582016f6442dc76d3bd903e3
│  │  │  ├─ 46c8b3cbf2a429658686131f56c44f60e104d5
│  │  │  ├─ 52409f93cf479ae576889745283ea9ad8c320c
│  │  │  ├─ 5d9d4bb5670ab2d34ba39b8073862fdbc229e7
│  │  │  ├─ b83f1d8df8b07f730f599eb210b4af6dbe8c91
│  │  │  ├─ e98eb2eb2ab5ccfb5e585f7c4108c9705f359a
│  │  │  └─ fbe40c78f67801f08492ff5794fabec5ed67b8
│  │  ├─ b0
│  │  │  ├─ 002f06c57dd02c85057528688f1edbce1f5d1a
│  │  │  ├─ 0b854870d212fc4b775958c53d7751bd3c049c
│  │  │  ├─ 31b514f460f60f71e30cce38945a254da20358
│  │  │  ├─ 3aeb1774534ebb6d7ccd06a71059a8b2e64e30
│  │  │  ├─ 7c4c379f3562e04af8ff4f317348382b893770
│  │  │  ├─ 93c3afc95d7954f84233f9c593f4dfcf03b7cc
│  │  │  ├─ 9bcc2675c2138ad98f20cbdd39bae0ffada2f6
│  │  │  ├─ a4ee73b43ad10ce6c8e5d13b8542c5d98e3af4
│  │  │  └─ b55e77968364c3bf74f30c97b8d6faef5d0c91
│  │  ├─ b1
│  │  │  ├─ 4ea6442dab4bb025bcf198f904dd10d20ff7d2
│  │  │  ├─ 56c2af71c7797e567b1af183cf53f6971afaa2
│  │  │  └─ d39e7335164ff906b4a480e13124cc7d00b5bf
│  │  ├─ b2
│  │  │  ├─ 0071b22308065a10fa07b7297ac0ae0dcccfd1
│  │  │  ├─ 021e95d93a96904fa5778dd0c6e53890c2d131
│  │  │  ├─ 3926778eb4367a4a9dc523b3534cb98c0bf6ab
│  │  │  ├─ 4362001b819194efdecb4b5dd70745c729250c
│  │  │  ├─ 59708a01ba788da8682710f5b0198277c1de8b
│  │  │  ├─ 8b87c1442e7ab9cd96b535239b3753e908be0c
│  │  │  ├─ 90fd828ea6e20729a46c07c611efb291e99ac0
│  │  │  ├─ 924050164664d373620d0ca48efb916febc273
│  │  │  ├─ 9d5640d75634e3fd9784dead7c9f457b00bc69
│  │  │  ├─ 9fb345a13efd531143ab6a3c403c9ae7b9e66b
│  │  │  └─ c1c633bbb0ee78b398af770e994f125cd6a394
│  │  ├─ b3
│  │  │  ├─ 207f0bc2a74f1f1827525ca03083bfe754f485
│  │  │  ├─ 3b341c21aa54161769752b5e3c66f77f05ae45
│  │  │  └─ c3b528598755417c0171115c6a42c21855ae0f
│  │  ├─ b4
│  │  │  ├─ 77268bc3370fd89b10ca024cc3d80a85177cba
│  │  │  ├─ 79d7aeb847f23774458800f52f9acf43e00311
│  │  │  ├─ 980973a1024f3841293fbf83a80a19ac1d20f4
│  │  │  └─ f9b9f8e7bc23d129518d4d984b3c72db227498
│  │  ├─ b5
│  │  │  ├─ 253662b4744a8e1b5b2adc0c9c1c8a86e93bbf
│  │  │  ├─ 73fb3603b9476c07ca35410b2ad70b2dfbfc8b
│  │  │  ├─ 8f842d2c502684a2f2a3b25d0e63f517227a6b
│  │  │  └─ bfddfe4bb2f08df664e0e7309e722dccecbab2
│  │  ├─ b6
│  │  │  ├─ 02650fbbd38797f5efc19d8c1eea8a820a710a
│  │  │  ├─ 125dd8b5cf80963f52e746c875db55a7b49f37
│  │  │  ├─ 2960500ad0404d5adc2f833a75a8fb04fb6846
│  │  │  ├─ 683f7c7c8156cab4a9bbf761f5cd940ad22bf5
│  │  │  └─ 802e98ff8fa7b59ece83691d25618eaa41bf3b
│  │  ├─ b7
│  │  │  ├─ 33e32ab30f095fffa469f0ff39a7e84e7c3e84
│  │  │  ├─ bc8245905ad16f26ca999b19abefd37bb18c9d
│  │  │  └─ e638f2fe602f59a773c30763dff3e61511589a
│  │  ├─ b8
│  │  │  ├─ 4517f48bb20e02699dee4dec98dc254cbd81b8
│  │  │  ├─ 7463fe2ea3e5515a0531f396f2b2c509373b04
│  │  │  ├─ b5fae5a46d57d75453f00c55305844d0e4fd30
│  │  │  ├─ c26776bdd788e39fb9a84916583ef4d6f7b4b4
│  │  │  ├─ c6dfc08a2c2629c45328eefe80160095677f9e
│  │  │  ├─ cd403b9eedfc0b4eeb0b495ffb9c1593ba96a2
│  │  │  ├─ ec48dfc5296a6ff96976dae59cd0e3915249b0
│  │  │  └─ fcaacc501eff43753518db9d409d0a7a05fb41
│  │  ├─ b9
│  │  │  ├─ a754356d0aafb468fde8c805afd03f658c8a63
│  │  │  ├─ e11dc7792bf89e95e3ccefdf3c172972138f23
│  │  │  └─ f8e62ab5f99118e2f55a56bb43d2f6492a79f4
│  │  ├─ ba
│  │  │  ├─ 0b87c5e61004c63a769047e7ca75f617da7402
│  │  │  ├─ 2ef1f99e40498860d1a0c0671a7e9be8e67ac0
│  │  │  ├─ 328ee5e33e90205617a0f83a3d51b0ce690c3c
│  │  │  ├─ 767eada521e8cb7fee37e242026fb8afc1747d
│  │  │  ├─ b02b691a3e07071732e3ac1915392fa16a38b8
│  │  │  ├─ b361813d3410f2bd01af01263405c4a0bedfe7
│  │  │  ├─ b6e37aa4aa2123f8b9ac1eb6faf3aa39f54cd3
│  │  │  └─ fd3ff80c69b7577e3e549e5ee551e71d358e12
│  │  ├─ bb
│  │  │  ├─ 0753baaf5c0b27d6f2801bcdb7871e2ca22091
│  │  │  ├─ 347cc9200cfe43b431677fcb852e800a94f807
│  │  │  ├─ 45bb64d06c3350bf1c00f6f74329192eb53395
│  │  │  ├─ 99522300c07015edc5c768e5058578166dc7bf
│  │  │  ├─ b0fefeaacac1b6e5a3e65b8609bae79d0915a9
│  │  │  ├─ bcc1bbf315583fd480183ed8c6b55c2c71df88
│  │  │  ├─ c038ad60369d44b6257c25ae1d22e4161a98ed
│  │  │  ├─ d10b448c039336e0b4d4d170859d830a70f4de
│  │  │  └─ d6f177bc51a143171ec2eb2ead27af5828f948
│  │  ├─ bc
│  │  │  ├─ 33d2d25d62b234cea84271386c05a8c7a18654
│  │  │  ├─ 67d0ae257813a1e264dc0f8b679f785c74c25c
│  │  │  ├─ 6eb87c925a0c5d0bcddcf33b91b2ff8d18742c
│  │  │  ├─ b00a2a01b1ad06460368963d9bbaf4a2e06457
│  │  │  ├─ b0fc66cca49eb08843758852219311ecb0cd15
│  │  │  └─ f9e0e9de0c71f62ef4acb394a18cff744d8108
│  │  ├─ bd
│  │  │  ├─ 28a59217f372df2a2f1743e1776c4fb6c3f933
│  │  │  ├─ 914c926299450d9d38a076569f7edf7f34481a
│  │  │  ├─ 9a4c5f114406947a4948cecbbd4c7cdbd9bda5
│  │  │  └─ a18e5a5e30bb9fe53fce900241b773efcb7166
│  │  ├─ be
│  │  │  ├─ 070b8ba4461fe9b30741b0013d84fcaab50468
│  │  │  ├─ 4643443108646d43d28536fcb4c077c4c2140d
│  │  │  ├─ 937bd600bef6e37a5ff2b77f40a349fcd8ceeb
│  │  │  ├─ cc07d81afe32d08d82c15d3b9b9d8df9b3d889
│  │  │  ├─ df57bd51ce1fdc012507f5547423c3aac8b377
│  │  │  └─ e5c424f3f75ced2247bb5801d840aaebee87f9
│  │  ├─ bf
│  │  │  ├─ 098e5621197e845a067a4834179f4521a7ac50
│  │  │  ├─ 2e231cc7b052b1f1f1541c8773247fdcc047e3
│  │  │  ├─ 555b5c1cff5221c27442f8917959309a51f395
│  │  │  ├─ 6dda3e80367d6cfd934ccf6d1ea28825f93b03
│  │  │  ├─ 837d31a11120c2c660f8d5dc62049991e7d2da
│  │  │  ├─ 8b929dd5e3fcbf4248a03f2a931d39607f9beb
│  │  │  ├─ 937aa21864be75cc0f68c5743392788311edbd
│  │  │  ├─ b9fdf3117ce4f597afd7401f5aa9250c332e98
│  │  │  └─ d85bdabd41485eb66b159774db73595034ab4b
│  │  ├─ c0
│  │  │  ├─ 4b9f28a1d3599448bac694e317300e2eade6ca
│  │  │  ├─ 87e3312879caaea8faf3274dd2e55013263ffc
│  │  │  ├─ d17f134d94bfd8ce5ecda2f471b2833697a40e
│  │  │  ├─ de47a8bca1961d7bfd5e9c875537f9d64bffef
│  │  │  ├─ e3c4e306466bc01e02e2b711bde39281f2a056
│  │  │  └─ edda988b3ddd1753af8e235aa25f048914788a
│  │  ├─ c1
│  │  │  ├─ 2d1c74eb42301874b9efcf75d610a82abcafde
│  │  │  ├─ 3b1237ec58aa27333981d8d859b9e989f65d21
│  │  │  ├─ 5cdeb9bca86ce6dba33a62e47e36ebc58ed881
│  │  │  ├─ 72299d9c6feb671c145d0d32c7668054ea9383
│  │  │  ├─ 8acefb4260d518593c4b000af24f1206baf050
│  │  │  ├─ bfcf176af33d2991fa54cdea920418ad12e6cb
│  │  │  └─ f34e3417f2d4322eabeac2b69aa861005bc1fe
│  │  ├─ c2
│  │  │  ├─ 31f83cb859137dd00a38fe56916a26149da498
│  │  │  ├─ 3684fb38cab15602dfc0685a364ab347a48ec8
│  │  │  ├─ 67ca2bf2570c4087d2674f49fa97b426a7119a
│  │  │  ├─ 7dddfbaab6474795f446aada2053af7df234cd
│  │  │  ├─ b78fd3c0f5070431e0ee3a8d0206ffc4fc22d4
│  │  │  └─ bfd009b159d952d1b76d48d5a436e83407c890
│  │  ├─ c3
│  │  │  ├─ 193733338c7a42ba7173722f44dece44d5b479
│  │  │  ├─ 3c70757591757131f0525c613e88858b63c5dd
│  │  │  ├─ 676ae77a27af379e76033da381be530fda0701
│  │  │  ├─ 73d4bb401e588c0552890694b53e077fdfb511
│  │  │  ├─ 9b7e8fa7c91fc230d97e8d88c153e494109fb0
│  │  │  └─ fc91e6ebcc00fce675345fe8de46c03a844e9a
│  │  ├─ c4
│  │  │  ├─ 112e63c89fc239c2b2dc6fd172c8c0202bdc13
│  │  │  ├─ 2bb5ca38349b7c1967b9c65b96f36b14a8a4f1
│  │  │  ├─ 36546116810c6d47a90e8c4636b01e3a34b282
│  │  │  ├─ 3a268adb98c7ba73557f6c87bf5ee4fe43adf1
│  │  │  ├─ 636e90df855179673b845834794f8b2369f401
│  │  │  ├─ 788a01845620d7b6a5b1688c3368133501ac97
│  │  │  ├─ 80cbed95166301de276d8d0785b394faf49d68
│  │  │  ├─ 929be4c038853b34c97acd680106dcbcc7a6a9
│  │  │  ├─ a69185fb5dd039d02ff41bccfc3e372c9f15ba
│  │  │  ├─ a78a9cd8e3d90ecff2e087c7d9a41c4819a820
│  │  │  ├─ d2c618fc2b75eafb46f4721b72b668fc8740c9
│  │  │  ├─ f21df5e82449f386f93ba00e21fafd4e2d1cd5
│  │  │  └─ f5a71727491d04dfe2ceeb39352d47d70ab6a6
│  │  ├─ c5
│  │  │  ├─ 3c74125062e64fd10d714441ef5d98c18ede3e
│  │  │  ├─ 498f97b50982f28fda903ddc146890efbbd9cf
│  │  │  ├─ 695359236f28d5e3084459110cb503fe87dcfc
│  │  │  ├─ 6a57759e1ea704987c9d1dc5b6747caecf5cae
│  │  │  ├─ 966bb304d405c29a10d772ea1e7f51770886d4
│  │  │  ├─ a7685368c82f2e2087f98a0f7698e4e295b507
│  │  │  ├─ ab9500db4f29f2c2282db353cf27028b95997f
│  │  │  ├─ b87c393bbc0d1432951004c00eb04ea98233f0
│  │  │  └─ d3844e26d4375550df19530421cda50548436f
│  │  ├─ c6
│  │  │  ├─ 18fcad192fb28eee797787b31eaa51c6a4158c
│  │  │  ├─ 61987ae154922b9242ed973280ddc9a28e98b8
│  │  │  └─ 71b349fdb49c47c604aada1b2bd82d0ed4daca
│  │  ├─ c7
│  │  │  ├─ 093da5af8049f0cefe4cfdc557c078bf2b2626
│  │  │  ├─ 23fe6ff99e3194ea52e8fb0310446d8c064e5b
│  │  │  ├─ 87ce9ee3c703a5ef3ee3b34d1e024d99a554b6
│  │  │  ├─ f18e589c9389879efbc6eb4b05eaac4b9abebf
│  │  │  └─ f61cbf3c700794961a4af13ec9b8924bb49c20
│  │  ├─ c8
│  │  │  ├─ 00562519fcfeeb50a9e1e85721f65f45aa3782
│  │  │  ├─ 0aabef94fbe0d13f38dea8cee3e7a6fac3f88f
│  │  │  ├─ 154d943f572314e555aca0ae2b108166ac861b
│  │  │  ├─ 6fe675272ad2849523dd87bc20deb92976f379
│  │  │  ├─ 931ef22ba3ef402cf0feca49c4699f2c7a7a17
│  │  │  ├─ cc3c49028b2e656e0e12f07553a9aaed8a8377
│  │  │  ├─ d5027c9ca2d4ca9d458da8148429d7b7aafb54
│  │  │  ├─ e35ccaa7f2b1d405989a86425e65657683e7d0
│  │  │  └─ f5e6bc0bdb4cb669b9a88c5b6c1f6d211587ae
│  │  ├─ c9
│  │  │  ├─ 3c0e180704d8cb2542bcfbc1714dbba3e10f3f
│  │  │  ├─ 505f42af06e9773327e756350ead4d5dbcd6df
│  │  │  └─ e9cce000196f2e703b20366b478f85c192db1b
│  │  ├─ ca
│  │  │  ├─ 0f2ca041cade6077d57992ef56b7437e2c0bee
│  │  │  ├─ 11fae7be6a0b4cc21fc52b7517194fb4c2f362
│  │  │  ├─ 154b9d01e58edba871d0c1b789f1a15b33f3c6
│  │  │  ├─ 1c3235ca953d28ee1a839e8ab790e0048bdf3f
│  │  │  ├─ 2afdbf1ca7d2dae6184a68aece4ae4a0edb276
│  │  │  ├─ aff7bdbaccc43b4c89fcfc15dea7c45cdcf41d
│  │  │  └─ e5fc92722fa471007257b1533afdae67a52537
│  │  ├─ cb
│  │  │  ├─ 359177d6c073f84b52cdd95d7cf2a4ef0cc34d
│  │  │  ├─ 5ffe233988a04311a5bacc36df66c44c669520
│  │  │  ├─ abc2e34f522267c9f8cafd9207429d925cec07
│  │  │  └─ e20f9a6798855232614e07d9c0777cf8bd4120
│  │  ├─ cc
│  │  │  ├─ 53ad570df0ceaddf2ed3622e126c2a7c669b0f
│  │  │  ├─ 5b561de7ecc9b4dbef30455576db40a140cd3f
│  │  │  ├─ 6c7aa0ee032758cab52b3ec75886d7ea030528
│  │  │  ├─ 878edcb78d132382e319aea34e58e3786f51ef
│  │  │  ├─ 9faa4b02f89cae42945e102bc5f753771114bb
│  │  │  └─ d981a8d3c8d28e2087b220ca15845a9e43f9d0
│  │  ├─ cd
│  │  │  ├─ 00592f914d9d997fa7bdf121c1463fd6404096
│  │  │  ├─ 1131d89aff9eff821bc505a13e8777cd2f3650
│  │  │  ├─ 810659d251e3ba49e0dd2d5c1cdf3c6417b923
│  │  │  ├─ acaea6687ac2b086c1af5f7d002235d8356340
│  │  │  ├─ b10502fbd9a991e9311d6cf9b36fa8daabe99f
│  │  │  └─ b2494ead042f080069595a7a2c84717f9f5a8f
│  │  ├─ ce
│  │  │  ├─ 00446e06c2e127c386fc4ecea89d44499f1407
│  │  │  ├─ 0ba4051efc21b9b3cf7adcd97ad57dc74cd0a9
│  │  │  ├─ 4f8ce19525a6bb1965fccb39825944e2e35ef3
│  │  │  ├─ 7b6167e1120469ec12094152b9cd37b45b9f05
│  │  │  ├─ 8374a127c9a0370b0e037724ba7620215f64a3
│  │  │  ├─ 908952b4a16167bfeb627b534cdfc7f15ed5cf
│  │  │  ├─ 983210ca2ccd4c755c76bfc316be08786c8981
│  │  │  └─ 9be31cb8eb8fcdb365b242fb8b27812f3ff609
│  │  ├─ cf
│  │  │  ├─ 5b23264c68c8acb6e4983ff701996c9a7408a0
│  │  │  ├─ b3b017bad0cfb32f828f550b323fcab4637e85
│  │  │  ├─ b767038cd588f662b65220f12788a1c13601e8
│  │  │  ├─ cd0cdb24d840c09b2a2111daa65674cd3f9f8a
│  │  │  └─ e59155807edc6ddbb32de3d0dd168a2d5a87e9
│  │  ├─ d0
│  │  │  ├─ 435f02d7573a95644785e4517f2bbdf6e8041e
│  │  │  ├─ ca635db2e0ddfd4b51c191961b410bdab17ad7
│  │  │  ├─ f7b16da4e96d2b611833ee8e85096b688ee4a7
│  │  │  └─ fd39fe0b379db27f3489696120376e4d8df5bb
│  │  ├─ d1
│  │  │  ├─ 04f8b2e280b53727bcf3154e4617111347dc85
│  │  │  ├─ 60b923d6874344499df88690542bfd8ff1ddc2
│  │  │  └─ dfdb22dd5a7bb419505d0fef12556966dd2182
│  │  ├─ d2
│  │  │  ├─ 2a90021f9541a74d7ffa29fb07ff212c60d281
│  │  │  └─ f0ea28094c0501be607196c10f5fbda898ab07
│  │  ├─ d3
│  │  │  ├─ 16db437a98b77d7727b621ce4815e98f30510d
│  │  │  ├─ 28e68cf7d135e3ce9db35bab0bb1ce430b5083
│  │  │  ├─ 307d5ce075b8c05904a216f176b4a3a944edcb
│  │  │  ├─ 78c4bf9e4f02a3fa429906169c92eb4ad90dda
│  │  │  ├─ dfde25230640871b2810fcf354850e43a954d7
│  │  │  └─ f5e5dc5d8023d19acc9ccb10744305455d02c7
│  │  ├─ d4
│  │  │  ├─ 0fa5c5b14bcd0e327f41fea6b32a06fdcd74d4
│  │  │  ├─ 74ec5d01576933ad5c91158d5ea88c62a43bdf
│  │  │  ├─ 7b481e0904f633c043019efa404c313eb2474f
│  │  │  ├─ a0ba865751f89ab3f0c2116710714902a4dca2
│  │  │  └─ db15cc8107618742fa2f4c0d79a6f76e75bc28
│  │  ├─ d5
│  │  │  ├─ 2e7ca9bbd2fb8740bba7313aa1f23f4d4699a8
│  │  │  ├─ a562dfb095564e1d4bc1f52c28fa1985cc6f95
│  │  │  └─ e89a78b6115cc8c364d78e279eb31039d79f8b
│  │  ├─ d6
│  │  │  ├─ 03a7c96728dac7ada761edb23b935f2a3b425d
│  │  │  └─ 7fab38eb615485f7f609f5391766fdb92993c1
│  │  ├─ d7
│  │  │  ├─ 478c42edd66b4007210772807839749e9d27fb
│  │  │  ├─ 66dadad272892d2ab4326e11ac89f344ab8041
│  │  │  ├─ 7b000ee960b644cdeac7a464e0828218c23d45
│  │  │  ├─ 880e57f4acfa95fbfb823fe6dfcf2de5ecbd8d
│  │  │  ├─ b74e4b4b452fab5a354839061c354c1a13d4e7
│  │  │  ├─ e22d9a126fd13de5b990bcc12c106234eefc3f
│  │  │  └─ f329706bc91cf4b8809215cbcdfb2ceb7e9746
│  │  ├─ d8
│  │  │  ├─ 15451002c9a063770005506664740c5b21018c
│  │  │  ├─ 16ef0b6f9eb9193e4f7baaa0666217a9a2c9f8
│  │  │  ├─ 559d906d6ee8ebc7278e82e81f61aa2dfd9ee3
│  │  │  ├─ 60c9479efdaeba58c0cb7600726cd4dd954397
│  │  │  ├─ 824ee11d826409516e522cc801c05e459de0b8
│  │  │  ├─ 8ace9011b48c2e22642dfd85a7d56776e4c8fe
│  │  │  └─ afc8ec4ddc33b79d8dcbc390ec78d7413bdd12
│  │  ├─ d9
│  │  │  ├─ 4dea59331829ccd05824fde4ba13391207af7e
│  │  │  ├─ c38893b54c89b4ef28de77d90460b3026062cc
│  │  │  ├─ c56a21c5641149a55b4f32fd88d929aba52e53
│  │  │  ├─ d8d8b49d24adc6fc0104008cb44415d5f34286
│  │  │  └─ da51ccec7885fcf6338b82c372e05320725e55
│  │  ├─ da
│  │  │  ├─ 60c945c8a4b7121994bb43391832eb352ad0bb
│  │  │  ├─ 766e2e07f3d7b3d9d689406e360f5cd7d4be44
│  │  │  ├─ 7cdc0f00942be9f062b0c5232b250cbd265987
│  │  │  ├─ 8868ce1b562cd9ec92b59f99cce3d676c9929a
│  │  │  ├─ 8f30c1f665e3b15a731c9cf9e575199db0796b
│  │  │  ├─ c2f312c95040cde9a2b5de37a557de1bad37e4
│  │  │  ├─ e37fc9237f15317a6ee8107d13a60c8b613f70
│  │  │  ├─ e3b63aaacd8c04f9c1feff6e80213579015ffd
│  │  │  └─ ef6e72ffc4de304c73c5a32db1a1a424a528e7
│  │  ├─ db
│  │  │  ├─ 37ab171e516258a354dbc1e7c7e6837b6976d2
│  │  │  ├─ 57c9759b74cda05f6a5af370c6535bf9bc22de
│  │  │  ├─ 5a363b468dbdbf881c48435d954861ba930825
│  │  │  ├─ be244eb9b976df1a4223b3a8e3c68725128e25
│  │  │  └─ d79bb001de2a94b36b0c5bda7494b380a9cffb
│  │  ├─ dc
│  │  │  ├─ 0d71b1ac83a57367d3953bfbe5130c44235a63
│  │  │  ├─ 0ed0f22aef0e4c8ad3c09ac3b9a54c7c626d8b
│  │  │  ├─ 49640c83b96e3af8d58f63c6c526bcbec80e9c
│  │  │  ├─ 82c246a3527d7e67182a16a7575c882e77d915
│  │  │  ├─ b2b492c816d6413a350c062050b3a4d048ea1f
│  │  │  └─ ccf1c8540b9c14316030273e027e2c16745c6f
│  │  ├─ dd
│  │  │  ├─ 4209a9da542eece8017eb3a05ad9ee6a5b89aa
│  │  │  ├─ 83b64081385f63e10740e0f0828606ae84906f
│  │  │  ├─ 9c5d5933618d26d0025ea97f82cd790a5c3170
│  │  │  ├─ b5b785caf4d1f369d973f43c7c9cf6dc956e11
│  │  │  ├─ d7d354e7b8c1c79f6c9585e41c311100c96409
│  │  │  └─ ec11f3e4dea029e92907cf3fedb79718bba180
│  │  ├─ de
│  │  │  ├─ 174d790469a86ac9f5910793ff0cd1bc2e59d7
│  │  │  ├─ 2bfe46d6bba443ca177df5333f1a5f987e5b95
│  │  │  ├─ 5043e33bcba7e0b363559821e7839d6dd13e82
│  │  │  ├─ 95b03a286474633e99dbea8f4fbb30e96c685f
│  │  │  ├─ b59291e14273aea2b3ed846d88fcc3a8d2bb1c
│  │  │  ├─ d19f87e861a066b0df5eb7493053860acec03f
│  │  │  └─ ff04dbe9bc8b07afb80374feb4c235c0e9cf18
│  │  ├─ df
│  │  │  ├─ 1d4ea5499351aa18ac688084e7438ad99faf1c
│  │  │  ├─ 3dad2b6ce0c6ca74c0d3ed0ce919426d9af2f0
│  │  │  ├─ b731cf9a9a30ad8cd45d54f14e6078398330e9
│  │  │  └─ fa2896a6ab59facf3a3258a2f2504014146741
│  │  ├─ e0
│  │  │  ├─ 0063cb976fcfd723ff3341481e7cba015bcdfa
│  │  │  ├─ 30ef3f15707d44a38ed1524a74616fa1e853a0
│  │  │  ├─ 4541ad4313d1cf1a68068b48cc7c36a8ef05f2
│  │  │  ├─ 4b9ebeda86a20777f80a2c9a64a9015b1470b9
│  │  │  ├─ 785220e68e810b209904b2441aa6920bec9e52
│  │  │  ├─ 8ace9b5dda75a9228edd4676f7f301d159a527
│  │  │  ├─ 8e44b5ba6394a14b59be835ba7d047fe862572
│  │  │  ├─ d715a5074b102e430cc69f9f51016f6f78937d
│  │  │  └─ e8c9b2d0cfa45e010abbbea8318db1f33b758f
│  │  ├─ e1
│  │  │  └─ d157ad57b07e5d41307434380455a9d528151f
│  │  ├─ e2
│  │  │  ├─ 15c113794f3584dff8ef2f0a7ab267cad9e8c1
│  │  │  ├─ 285f19389a86ee9623d0e8a612d3b1abda3e0d
│  │  │  ├─ 3e4896280de76972e60462dc32a289a826ab24
│  │  │  ├─ 8bf18e51a3c34c7b8a613a9a9feef1b8f05f2e
│  │  │  └─ b673102edbb31984ecf65278a120b149034bd7
│  │  ├─ e3
│  │  │  ├─ 13abe86be7bb9cef60691957f13d98824ed035
│  │  │  ├─ 181566032edd6b4c91da3ee7000b8c300003bd
│  │  │  ├─ 38d7699327725652792c9bad9c011b5854f10f
│  │  │  ├─ 3fcb7bbd35238a252981cabe4bbbf16b75142d
│  │  │  ├─ 4df2f208e51b3d56e27c3513807740f222c95c
│  │  │  ├─ a715b38767cc1c8a3924e4dcd67d66b8bb3148
│  │  │  └─ b703528a1f60ac4893aef37ad7ae5ee20c6120
│  │  ├─ e4
│  │  │  ├─ 70c552dab1e05fc439b9b2c8dc34fc86dfdc5b
│  │  │  ├─ 8958a15303c201fcd688356c9904c576dfed1b
│  │  │  ├─ a074c56df26d5e031239030e1e296a6ca39523
│  │  │  ├─ a19bfe02883b76795e1bb3c14e40cbe92c6660
│  │  │  └─ eed3d537ec458bee96972ebbab96cd3cb10f06
│  │  ├─ e5
│  │  │  ├─ 34ca66cfd3292d693cea094520a73042d0a800
│  │  │  ├─ 393daf24b651d3243e0569faccd96f9ed2eab1
│  │  │  ├─ 429558fcd4e7038ad054601bd3ab874205c4fc
│  │  │  ├─ 75a8dd1439eac439e59ecd8e54e3fe9df9df13
│  │  │  ├─ a7ae5389cb286e56cc02580a3d34bedfbf6136
│  │  │  ├─ a8ae4d1b96185f9e5fc81d2010d0a253afcf5d
│  │  │  ├─ b6e6066f7efec7cdb4f6f371d6f927847ddd40
│  │  │  └─ fa1d7b7a81fc3143718d41d19d4a097e8903a5
│  │  ├─ e6
│  │  │  ├─ 0ea004fef7b54c45054a5be97ea6bdef67789a
│  │  │  └─ f5971366d5ac7ce24c779f4cc5fbf657daf1a7
│  │  ├─ e7
│  │  │  ├─ 51b602cda9dc8065c2c04f6f1d61690d7fb79f
│  │  │  ├─ 83e576ad348142c412b29933a16a8c4e3f6bb1
│  │  │  ├─ a2a78f65f6804e7b1e739b0f5a5fd12de1fd79
│  │  │  └─ d4315126a143dc5ef4529688eb1f52cb77ce08
│  │  ├─ e8
│  │  │  ├─ 17af6e8fe2aa961f8c73f4852423c9c0eb1e1a
│  │  │  ├─ 28e9bd067a7467ab2c4cbbdc39a5417a75f956
│  │  │  ├─ 4e26c4fca11074d5a36567dcdf8e4327dd59c2
│  │  │  └─ 51c57fb593bc6f8ed3d38d9e5506720809275a
│  │  ├─ e9
│  │  │  ├─ 0eb11706cda42717a81e3bf9eb8bcb92815c21
│  │  │  ├─ 1dc4be9a3ea3d0342c1a55e6562bf659afee01
│  │  │  ├─ 483cb13de95964a7dac6113753a790b6976056
│  │  │  ├─ 555dfb088d94c4eb4c61a36b775fcd51e7b1e6
│  │  │  ├─ 8a4024eac85e8e028b072e509f8100fc655599
│  │  │  ├─ a4959bae73847f4c487f33ae1ce507dbc4e2b2
│  │  │  ├─ cee498fc8a2972ce19c96a4258706a3a01a096
│  │  │  └─ d9960085008ec78680b36e75a9ce2d1b80f928
│  │  ├─ ea
│  │  │  ├─ 398b65a98d6654c79f636dbef817ba2bd869b5
│  │  │  ├─ 4ab8e9e65d8894b611e1c243703ea91832f787
│  │  │  ├─ 4cc715eb3f624c8b12caf6ebe002a681cea02f
│  │  │  └─ 5b483b3936ee4804cada484c178984785d6232
│  │  ├─ eb
│  │  │  ├─ 525fdd3661338c98d0837be2ee4299a3eb31e5
│  │  │  ├─ 63c3108a55630ae7832a4e70585f049f6cb121
│  │  │  ├─ 9734e46882a9fd2636c71778015930424cf9ad
│  │  │  ├─ 9f15ed29f589cbd1d0de6bdb0f9e5f0ed97f24
│  │  │  ├─ a391b31f83275cb608bc31bbd3220ecf5cbcbb
│  │  │  ├─ d2f1637f8f2479e43100e65bbecd3b7ef346a4
│  │  │  ├─ eb56913c5b820053e3e3acfb6c2dfce7c52e23
│  │  │  └─ f9ea0ab8c5dc9199bd4c692b7331f9525c1576
│  │  ├─ ec
│  │  │  ├─ 030bf19994f9d3c0e1aa3040c99200fc624cdb
│  │  │  ├─ 03cfdd29fd496bdc9ed3aed487a1c63523288a
│  │  │  ├─ 0d2d7d5a32a8a2f751595174f9540ce3ddf138
│  │  │  ├─ 5d7f4c9adce3190a8741d25a6ad6b139e2a167
│  │  │  ├─ 62e91b6083a5a383de887c357250f5c5bc04fd
│  │  │  ├─ 82f2a15dc7aed959319b4c68439f9c28ad67ae
│  │  │  ├─ 849bf154b0977f5db5090410a28c1035c57956
│  │  │  ├─ 9ffd5b8a5de12f2ed2b04d630189d005b9c829
│  │  │  ├─ b82d9d7f403324a8d7332d8eb104a8ce218378
│  │  │  ├─ bee02b5dfe0c3185dc33402db5103f0ace2e47
│  │  │  └─ f7c0e95efe31d21f04ac12b4a01c7ac61a78ff
│  │  ├─ ed
│  │  │  ├─ 3e9109570cbc55c96bb8f58e13169fe64e60b8
│  │  │  ├─ 68569e93acf278b8decb1defecfb81d1a715d6
│  │  │  ├─ 906cf4187ccbca4c775853256bdc118cdf526c
│  │  │  ├─ 9c20fd5dd6f9aa9c8ec82bb2c7a2de5b074479
│  │  │  ├─ da092e156f30ca9d66e32fae1624a39acb5dc3
│  │  │  └─ ecbe7fe30164a754edca78cf18fa3106af7751
│  │  ├─ ee
│  │  │  ├─ 48676421e759c85e310f135af117d7aa1d6b79
│  │  │  ├─ 71dd2cce74acc53a22e4bfe65b4d440f4d8256
│  │  │  └─ 89d7f373de08d93fb4b88dd16054e5a9932433
│  │  ├─ ef
│  │  │  ├─ 468ce6466c375ab0d8f16f45e201533e3f5d48
│  │  │  ├─ 5d6697d00ff984d7089fbe088c11e58c448308
│  │  │  └─ 8f09249b7fa36935ace272e30434e2bf893f94
│  │  ├─ f0
│  │  │  ├─ 1e3ec5679565f370f1f58fcddd46eccf4305f7
│  │  │  ├─ 49614251f0de759a6c390a04f589d134da075a
│  │  │  └─ f16647fbfc33aef8680683d09066eaf781a8b8
│  │  ├─ f1
│  │  │  ├─ 0fa8190053dc0b1930219c60e8a722288ebd2c
│  │  │  ├─ 215452a1fb083bdd723d69168077a074c19be0
│  │  │  ├─ 51f9126ee75e930f77dc7fb5ecf8d7f75c0a77
│  │  │  └─ a7af6ae339374ba915c30729f63faf8c135028
│  │  ├─ f2
│  │  │  ├─ 4090e990d3d95d0afe227cc8a7e7ae134b73e4
│  │  │  ├─ 522e1ba779fcbf575d5002f26d4ec5d88b432d
│  │  │  └─ d00ff1254fc07f799aa5333b76418cc52eb3e1
│  │  ├─ f3
│  │  │  ├─ 187c0af43aa9179f647fc002e95b370f8e4680
│  │  │  ├─ 35a6230501a94d38fe806d5eaa26478559acf7
│  │  │  ├─ 57f72bc3906f92bec745f4314f9aff1d8c1640
│  │  │  ├─ 75db7dcc74caa77babe5d9a2b861448c3501dc
│  │  │  ├─ a6233497e0f52dea07de26e5a5dca48e6a815e
│  │  │  ├─ ac3477c65884689ef65a42a2aaeebf898def1e
│  │  │  ├─ c4059beb3edb893f994aea78708b90a384580f
│  │  │  └─ eed04295fe8858c218d2c8e77ac150a224ba08
│  │  ├─ f4
│  │  │  ├─ 036bd024c4da018741e869e0accc127dc894f8
│  │  │  ├─ 2534249ec03c98373798abc045e0cf67122a58
│  │  │  ├─ 4636e83e9a5cae3b437f49380fa9e576f54273
│  │  │  ├─ 5cd6e0e8a51b425661337211b071635517ae7f
│  │  │  ├─ a3aae8c4504528f59d124311ba275484134889
│  │  │  └─ e82618b30960a1f89414b43e2630f0e11fb697
│  │  ├─ f5
│  │  │  ├─ 0556b3d4443382df5b89d2d245a983e8a12b59
│  │  │  ├─ 0ba664ff9915d7b66fe2ad22df7f8d5d4bdd7f
│  │  │  └─ 48a715b0605688da0765425ff0363020e0e3f5
│  │  ├─ f6
│  │  │  ├─ 65bbc3bbc487e919e13619f491177490b01a41
│  │  │  ├─ 9530cf19d62bf28aa8b978aafef35d5bf1b418
│  │  │  ├─ d80292d8630809290696e5f55e83cebc3c42d5
│  │  │  └─ dda079f78457720a3820ef1fb9a3c1d49cb3df
│  │  ├─ f7
│  │  │  ├─ 0d35c4a3efd7e6e56a46de81ea2726d0f5cddf
│  │  │  ├─ 16c437e477204964dff3f353d4bd187d0e6cbd
│  │  │  ├─ 623e3d59fbf70a4d7e1b0c19b722051e9689a5
│  │  │  ├─ 642cc80f5b8a483592ac29b6640b33bbed4bf1
│  │  │  ├─ 6476451774f51c10f805e1da626694e4987d35
│  │  │  ├─ 68890d1b56667488c81197502345d81f996820
│  │  │  ├─ 71c73995252cd90cbedad102e93b41e835f514
│  │  │  ├─ 81a5ed2054317ee90f15857600f5a0f4bf391d
│  │  │  ├─ bc7b66fa787b440875f5a2a9066febe911b5a0
│  │  │  └─ f6ec816c6c5e2187c786b36bab2ee2c14d2314
│  │  ├─ f8
│  │  │  ├─ 17f45919c82970e175a9e4e2bb6bb324e0052f
│  │  │  ├─ 69f45a547894b694befc6955f1786e0e6644ec
│  │  │  ├─ e7eb9734f9ce7ccc9c162658276220765452fa
│  │  │  ├─ f66cb3be73043ba5a3e65d702d1ebe18439e51
│  │  │  ├─ f83096fe1a0b659f04c07c0d6aeb4597b6ece2
│  │  │  └─ fe4a40297a149efb2efcbd13026604a1ffae5e
│  │  ├─ f9
│  │  │  ├─ 388f550f91b1d98998e3143dc5222cab404106
│  │  │  ├─ 43aa1dee86bbc24833e1c466946e1299ee34ff
│  │  │  ├─ 4c3722ce5c3fac7ae29dec15a8c5a3a32375c3
│  │  │  ├─ 5a0f196980a5b2a44e0a09422fda12745bcfa0
│  │  │  ├─ 9e6713d181be8c6e4f0b6eda1a00ebef1f7089
│  │  │  ├─ b4730810b7e8d4a48fdb2acc70e15ebb1f378e
│  │  │  └─ fdfe00d2ebe5137717131815c5ed5bda683ebe
│  │  ├─ fb
│  │  │  ├─ 0a6d04d9829821327498dac35bef1372f56dde
│  │  │  ├─ 23da4f4df3a4edcd4bed0bd37284426fc7e43e
│  │  │  ├─ 391036ebf615883fa9711b34197af62827f89f
│  │  │  ├─ 4f0a2919b283ee24c06908464e5bf27c64e4c2
│  │  │  ├─ ae0469fb6e6d568d4f73ef5d6fa85e0979aae1
│  │  │  ├─ deb51a450669c86b09305bf1a85c2b57d5583f
│  │  │  ├─ e0744387f5384fc2f5a7ccf5d18ee0d2c3ab04
│  │  │  └─ f294f2c834a9bf205cc8e9d5ba901c04eb91e3
│  │  ├─ fc
│  │  │  ├─ 0a38504eea6359c5a813b8426d2ab916bf4846
│  │  │  ├─ 3c1a43b094b19ec08e62366a40a2812bc6b8fe
│  │  │  ├─ 4c4d239dec6824b80cd1e7fd3065343d807191
│  │  │  ├─ 4d6970dd35fb99faaf8d9608027475735bfb60
│  │  │  └─ b74088a34fdccaf95b61705208ea46205a51f7
│  │  ├─ fd
│  │  │  ├─ 6c02034ea7b8f0ace4c1cc4b5865addcd8ff74
│  │  │  ├─ be08912cb6548134b2ad3d586d0e9df541a5d8
│  │  │  └─ c035f018741c8f00912eef691c6e2222a97487
│  │  ├─ fe
│  │  │  ├─ 3ef6152fe42937b59c91ef72f8380f7779af7a
│  │  │  ├─ 5859f80ec6f0e7806686d1f1ab841b6843ee3c
│  │  │  ├─ 65d12659fb104a8143b741787a0cc9e98068f5
│  │  │  ├─ b6cd5fa14551656379230a2244168597c99f7f
│  │  │  ├─ db2422603bc68d28e9abd621737e2a4c9aa946
│  │  │  └─ e1a35760e96b43178f3a7eec8efe54a4d6ede4
│  │  ├─ ff
│  │  │  ├─ 5e9eeed82273c467b825c6c6f0d9e55fa89571
│  │  │  └─ f14122bbd1c92ac079175935bafd078a117c0b
│  │  ├─ info
│  │  │  ├─ commit-graph
│  │  │  └─ packs
│  │  └─ pack
│  │     ├─ pack-0376df6afa6700fd3b94af15a48d4b71c045cb67.idx
│  │     ├─ pack-0376df6afa6700fd3b94af15a48d4b71c045cb67.pack
│  │     ├─ pack-0376df6afa6700fd3b94af15a48d4b71c045cb67.rev
│  │     ├─ pack-0865d47850395f73cfb65d83865efec6d6233db9.idx
│  │     ├─ pack-0865d47850395f73cfb65d83865efec6d6233db9.pack
│  │     ├─ pack-0865d47850395f73cfb65d83865efec6d6233db9.rev
│  │     ├─ pack-19c630ac9eb0a2e7bf7aa5b23b6045249bf177df.idx
│  │     ├─ pack-19c630ac9eb0a2e7bf7aa5b23b6045249bf177df.pack
│  │     ├─ pack-19c630ac9eb0a2e7bf7aa5b23b6045249bf177df.rev
│  │     ├─ pack-6bf9115900e47fdf9120df92c5719c6e4f67cc02.idx
│  │     ├─ pack-6bf9115900e47fdf9120df92c5719c6e4f67cc02.pack
│  │     ├─ pack-6bf9115900e47fdf9120df92c5719c6e4f67cc02.rev
│  │     ├─ pack-7538fdc59792c7f0e475f2d3b54ec3ec4bd7c19d.idx
│  │     ├─ pack-7538fdc59792c7f0e475f2d3b54ec3ec4bd7c19d.pack
│  │     ├─ pack-7538fdc59792c7f0e475f2d3b54ec3ec4bd7c19d.rev
│  │     ├─ pack-77d47d38c72a22d6a287f9c12808a6666b48a838.idx
│  │     ├─ pack-77d47d38c72a22d6a287f9c12808a6666b48a838.pack
│  │     ├─ pack-77d47d38c72a22d6a287f9c12808a6666b48a838.rev
│  │     ├─ pack-8156d89c70cf261098d8141f4d6e6159b1f68c05.idx
│  │     ├─ pack-8156d89c70cf261098d8141f4d6e6159b1f68c05.pack
│  │     ├─ pack-8156d89c70cf261098d8141f4d6e6159b1f68c05.rev
│  │     ├─ pack-86b8541291454c517c268a8225161d1b34578549.idx
│  │     ├─ pack-86b8541291454c517c268a8225161d1b34578549.pack
│  │     ├─ pack-86b8541291454c517c268a8225161d1b34578549.rev
│  │     ├─ pack-95652e55737cba099ff37ec1338c6aaa67f45e3a.idx
│  │     ├─ pack-95652e55737cba099ff37ec1338c6aaa67f45e3a.pack
│  │     ├─ pack-95652e55737cba099ff37ec1338c6aaa67f45e3a.rev
│  │     ├─ pack-aa16c1eb9db6fb24ebdf331af1b176efef225cf1.idx
│  │     ├─ pack-aa16c1eb9db6fb24ebdf331af1b176efef225cf1.pack
│  │     ├─ pack-aa16c1eb9db6fb24ebdf331af1b176efef225cf1.rev
│  │     ├─ pack-af95c35479268d5c85cff27c76652d09da011151.idx
│  │     ├─ pack-af95c35479268d5c85cff27c76652d09da011151.pack
│  │     ├─ pack-af95c35479268d5c85cff27c76652d09da011151.rev
│  │     ├─ pack-ce5c151e4846f5795de19744768983e6c8e07a1f.idx
│  │     ├─ pack-ce5c151e4846f5795de19744768983e6c8e07a1f.pack
│  │     ├─ pack-ce5c151e4846f5795de19744768983e6c8e07a1f.rev
│  │     ├─ pack-da2f3025c7e758eedc379f4e3babc444afee17fa.idx
│  │     ├─ pack-da2f3025c7e758eedc379f4e3babc444afee17fa.pack
│  │     ├─ pack-da2f3025c7e758eedc379f4e3babc444afee17fa.rev
│  │     ├─ pack-ee218e7e3567ca0773fc385c10a0e6b05c32a599.idx
│  │     ├─ pack-ee218e7e3567ca0773fc385c10a0e6b05c32a599.pack
│  │     └─ pack-ee218e7e3567ca0773fc385c10a0e6b05c32a599.rev
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ 3-Bruno-Emanoel
│     ├─ remotes
│     │  └─ origin
│     │     ├─ 02-EderNatan
│     │     ├─ 1-alexandre-coelho
│     │     ├─ 1-David
│     │     ├─ 1-David-e-Priscila
│     │     ├─ 1-Douglas-e-Arthur
│     │     ├─ 1-joao-soares
│     │     ├─ 1-Paloma-Brito
│     │     ├─ 1-Priscila-Anjos
│     │     ├─ 1-Rian-Victor
│     │     ├─ 1-samuel-almeida
│     │     ├─ 2-cristiano-santos-ribeiro-filho
│     │     ├─ 2-elis
│     │     ├─ 2-Gabriel-Leal
│     │     ├─ 2-Jaedson
│     │     ├─ 2-matheus-dias
│     │     ├─ 2-Mikelly-Correia
│     │     ├─ 2-pedro-teles
│     │     ├─ 3-Beatriz-Espinheira
│     │     ├─ 3-beatriz-talita
│     │     ├─ 3-Bruno-Emanoel
│     │     ├─ 3-Bruno-Emanoel-Allan
│     │     ├─ 3-fernando-barreto-costa
│     │     ├─ 3-joao-araujo
│     │     ├─ 3-talita-ester
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ .vscode
│  └─ settings.json
├─ 0-Git
│  └─ README.md
├─ 1-WeLoveDogs
│  ├─ pages
│  │  ├─ about.html
│  │  ├─ blog.html
│  │  ├─ home.html
│  │  └─ subscribe.html
│  ├─ README.md
│  └─ styles
│     ├─ about.css
│     ├─ blog.css
│     ├─ home.css
│     ├─ reset.css
│     ├─ styles.css
│     └─ subscribe.css
├─ 2-PlantCard
│  ├─ images
│  │  ├─ plant.jpeg
│  │  └─ profile-image.jpeg
│  ├─ index.html
│  ├─ js
│  │  └─ script.js
│  ├─ README.md
│  └─ styles
│     ├─ desktop.css
│     ├─ mobile.css
│     └─ reset.css
├─ 3-Portfolio
│  ├─ portfolio
│  │  ├─ .gitignore
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ public
│  │  │  ├─ favicon.ico
│  │  │  ├─ index.html
│  │  │  ├─ logo192.png
│  │  │  ├─ logo512.png
│  │  │  ├─ manifest.json
│  │  │  └─ robots.txt
│  │  ├─ README.md
│  │  └─ src
│  │     ├─ App.css
│  │     ├─ App.js
│  │     ├─ App.test.js
│  │     ├─ components
│  │     │  ├─ Hamburguer
│  │     │  │  ├─ Hamburguer.css
│  │     │  │  └─ Hamburguer.js
│  │     │  ├─ header
│  │     │  │  ├─ header.css
│  │     │  │  ├─ header.js
│  │     │  │  └─ switch-button.css
│  │     │  ├─ main-section
│  │     │  │  ├─ leorio-profile.jpg
│  │     │  │  ├─ main-section.css
│  │     │  │  └─ main-section.js
│  │     │  └─ secondary-section
│  │     │     ├─ leorio-estudando.jpeg
│  │     │     ├─ leorio-socando.jpg
│  │     │     ├─ secondary-section.css
│  │     │     └─ secondary-section.js
│  │     ├─ index.css
│  │     ├─ index.js
│  │     ├─ logo.svg
│  │     ├─ reportWebVitals.js
│  │     ├─ reset.css
│  │     └─ setupTests.js
│  └─ README.md
├─ 4-JogoDaForca
│  ├─ jogo-da-forca
│  │  ├─ .eslintrc.cjs
│  │  ├─ .gitignore
│  │  ├─ index.html
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ public
│  │  │  └─ vite.svg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  ├─ App.tsx
│  │  │  ├─ assets
│  │  │  │  └─ react.svg
│  │  │  ├─ constants.tsx
│  │  │  ├─ index.css
│  │  │  ├─ main.tsx
│  │  │  ├─ modules
│  │  │  │  ├─ components
│  │  │  │  │  ├─ button
│  │  │  │  │  │  ├─ button.css
│  │  │  │  │  │  └─ button.tsx
│  │  │  │  │  ├─ game-interface
│  │  │  │  │  │  ├─ game-interface.css
│  │  │  │  │  │  └─ game-interface.tsx
│  │  │  │  │  ├─ hang
│  │  │  │  │  │  ├─ body.css
│  │  │  │  │  │  ├─ hang.css
│  │  │  │  │  │  └─ hang.tsx
│  │  │  │  │  ├─ letter-list
│  │  │  │  │  │  ├─ letter-list.css
│  │  │  │  │  │  └─ letter-list.tsx
│  │  │  │  │  ├─ mistery-word
│  │  │  │  │  │  ├─ mistery-word.css
│  │  │  │  │  │  └─ mistery-word.tsx
│  │  │  │  │  └─ switch
│  │  │  │  │     ├─ switch.css
│  │  │  │  │     └─ switch.tsx
│  │  │  │  └─ routes
│  │  │  │     ├─ home
│  │  │  │     │  ├─ home.css
│  │  │  │     │  └─ home.tsx
│  │  │  │     ├─ play-settings
│  │  │  │     │  ├─ play-setting.css
│  │  │  │     │  └─ play-setting.tsx
│  │  │  │     ├─ playtime
│  │  │  │     │  ├─ playtime.css
│  │  │  │     │  └─ playtime.tsx
│  │  │  │     └─ score
│  │  │  │        ├─ score.css
│  │  │  │        └─ score.tsx
│  │  │  ├─ reset.css
│  │  │  └─ vite-env.d.ts
│  │  ├─ tsconfig.json
│  │  ├─ tsconfig.node.json
│  │  └─ vite.config.ts
│  └─ README.md
├─ 5-Blog
│  ├─ blog
│  │  ├─ .eslintrc.json
│  │  ├─ .gitignore
│  │  ├─ .next
│  │  │  ├─ app-build-manifest.json
│  │  │  ├─ build-manifest.json
│  │  │  ├─ cache
│  │  │  │  ├─ fetch-cache
│  │  │  │  │  ├─ 001a86fa953613cd764bc32ca261a20621a55d48b52c3dd8a0d09a5bb84918e4
│  │  │  │  │  ├─ 02dceb9f4d782b425e2908c030f41306e7fbc10a5193613683cbe1409c40067c
│  │  │  │  │  ├─ 031af5baf470e528df8ca1dbbcccb106e408ad110ffad447e47eda2935a46533
│  │  │  │  │  ├─ 04ec598f42d63b57ca45f5dd41c3aaa484719a291ea29b26cdcb338d7932a259
│  │  │  │  │  ├─ 09bf1554b2e973cee12b0f0624eb823b62a7da7e53474e7d66cd3315fe45b5d3
│  │  │  │  │  ├─ 0ed453bbf1c1d9c0caa40ec63f928ebc2d35a62c2b7592d8ae7fddc3d2ae84c1
│  │  │  │  │  ├─ 0fe3272969f4b3ceceec367211c3f7bb7233b3cd740809b411ea63b3843400b3
│  │  │  │  │  ├─ 13e9fb28a12a84c89cb8e9e4eba4809e4ac30fa7aa2ecafd0dc119a588d51b27
│  │  │  │  │  ├─ 1664c00fd94778e6851dd5e0bb281fbbe4df8a380c56236616c008e96e0b33bf
│  │  │  │  │  ├─ 1699309aabc4a2c690a6b2488f08477a80b60466d4643f07f99477478c45052d
│  │  │  │  │  ├─ 16bb461c19a193d1b93ded8fc9b636cc3c12b09d4082d663dcaece5971c904b4
│  │  │  │  │  ├─ 1d0546f01f75bd068a541a87abe21ad97c0ca7f5a0cfc7e81202c062e338c71c
│  │  │  │  │  ├─ 1d9d2b89d4d31d7787d8ba766b3320b80838fb6ee3b3d6db9d51352abf85c90c
│  │  │  │  │  ├─ 1ded7b583830d41e489bad60304ccf0d5bd5f7fca84b1040747e722339ef6e8c
│  │  │  │  │  ├─ 1fc044ba7573d029246458ce354d0c02d403bc215513fc3d3683417f860da285
│  │  │  │  │  ├─ 20c5d7afac58c11a4aaa066370b0be614c8a27e5f6d78e1f530e42fd45aab83b
│  │  │  │  │  ├─ 21085a2eec1077af98e3f96820bfefed5515709eb46857e3674f4bd0f273cc14
│  │  │  │  │  ├─ 22d17b22c01ecc88ca41fe7a92b0a0539163c7e6c4b8e8c28679d533c9f7c267
│  │  │  │  │  ├─ 2568513467b6bfb07599ab5b5bcb7ccfeb5220a250a7e1d3ee86dbb70292d5e1
│  │  │  │  │  ├─ 2f19fb5bc625daed5af395d56aec4cc9670a3b5fa87797194a7e311fc833d87a
│  │  │  │  │  ├─ 309f6afd5ae0ca3271765395fb100a8f4c14a96921e6573e2c6358388f0dfb25
│  │  │  │  │  ├─ 31a91a503767632eb743fef71f2022a570d83fb13fd43bf0a9423fe6659a2339
│  │  │  │  │  ├─ 3331c6a7ded7728367523224bb277e71a7506ee2411342ca1275bd97072cf790
│  │  │  │  │  ├─ 34d5b6c971d61124ecadde10dd3f5a5076ddbb4b6dbad9b053b7151fe5fd19f8
│  │  │  │  │  ├─ 380774d34951e087f12e73cb606822e5c5e76b292c73eb387ed195e19802b9a8
│  │  │  │  │  ├─ 39233764f59ecc80114023d7bd9e5d5cab7285d84be566a47c58c86a4fe60f19
│  │  │  │  │  ├─ 3b2b1f8fd0845cfd1ee5236ae088c07ba6d0521c318b589d640aba09acdccaa7
│  │  │  │  │  ├─ 3bd4fffd112adfe770dbad64a0309df865cf073d955bd05ae82b55d70c63d9c7
│  │  │  │  │  ├─ 3cfdaebe6227c47dea343270401992556c5e4f098de0f67174007f573a96cdb4
│  │  │  │  │  ├─ 42f4c704da59eed33eae70404471e41700cb7f066ed403372df367d02ad069e4
│  │  │  │  │  ├─ 46b3c25df692045917cebae91b0afde471f014a36e0e0c5fae1ebca37da08531
│  │  │  │  │  ├─ 48290cdae2910334324c5a5d97863b2f89e64c1bd9d9738abfaadc871b2c7197
│  │  │  │  │  ├─ 4bf0a1d6badbbc3373bb7ff430f2da8c02aeec729891fbca60a5265a85837460
│  │  │  │  │  ├─ 4bf116e1fe450b5052bde9ad4d4e3473a14e8bf34f8ba8c92f8fb5f8128b5884
│  │  │  │  │  ├─ 58c80915143e1917a362ef2e08b7e3bb24a52036e2c9779361f7952492f3996a
│  │  │  │  │  ├─ 5cfa98a67f38ad361f153b3548566787940156115deb84cc504dfee560d6e9fc
│  │  │  │  │  ├─ 5d89227dc2c6dad0691c948942adfef7d0617aad1d15545b78cf4aef7a2b7ff4
│  │  │  │  │  ├─ 609f39d0d3a89c093b8835821d9b9c80151ed8cb28cc23bd98dd555e66ebea13
│  │  │  │  │  ├─ 616b0ea0a6bfdd3cdad187265c6b0a5bbc886ab702860e3205edb8ffcb2999e6
│  │  │  │  │  ├─ 6272cd350753905b54e501614039dd2d255496f4e20de18554de4ef5354348b8
│  │  │  │  │  ├─ 6667c5af98169bbf647e513165b13933e4799584b674d23c46883c0a11aa7efd
│  │  │  │  │  ├─ 6a093a14e6b7339c0c1e67b7d1c4dd5da69febc02c1bba658d81243e8db2f5b9
│  │  │  │  │  ├─ 6aa87a8f3f1b2a4f3a3371e0b81fe1f0c0c9fc65cc6801816a328cd7e321127d
│  │  │  │  │  ├─ 6b2d37dd707d5e2b83caf3268c08ff88ea96beda55709017fdce7d913f59732d
│  │  │  │  │  ├─ 6ccda2d36952e488185f43923b6d52d9530a3bca99da82a1c135dd10f780bd34
│  │  │  │  │  ├─ 6e67ba3485b632a6c384da29b9bb5f4393328503825e3dca7cdb64d17b15a54a
│  │  │  │  │  ├─ 70078a0e888f960721eb4dedc872dc0c7ad3d0718ae5d95968dc532761a7b6e4
│  │  │  │  │  ├─ 7305ba8992fb9cfb73e74d69264fbe2cba97f45c70a2a63ce6def62d93205dcc
│  │  │  │  │  ├─ 753137904ba94e0a49bef0054264e693ea2a174b99a95747e403257432acb3a1
│  │  │  │  │  ├─ 7734902c54c68e6c7db6ad6ee1f774bab4a56258f40b60d52e82a01d375091b2
│  │  │  │  │  ├─ 775beffdcaca80c59678541d8d15268b05a8308b20a7c9dd7dbf6f93f55e29b9
│  │  │  │  │  ├─ 79016175756cc2c095bedaca51efd87f6b7467afed636280a8f0c52e45b362f0
│  │  │  │  │  ├─ 791d2fd53f18bca94ff608025aadabd931dc7420d4ffe60688da7f993be3a3e7
│  │  │  │  │  ├─ 7aa7019a897994e01560f80930714727ff2df63111a2af5bdfcc95fd9835d8af
│  │  │  │  │  ├─ 7af888bb5fa715deceaf45a3b200be451376e2e6b7361b2a0a66d2aabf6e891e
│  │  │  │  │  ├─ 7b96838e9ae6247cdec2d89c589f00556f3c5e61bab465d09d225b76edd95340
│  │  │  │  │  ├─ 7d39948e9ea10d57953881248504aa3b1cc18bf12973d432c3d84e0b50a972d8
│  │  │  │  │  ├─ 7e10027afbbd28b6cd3b1325f330e126476764a3783617f4662226ff9f38a3c5
│  │  │  │  │  ├─ 80b881ad6db7984e2c5cca3ec4d076eab60d02157be60276c88c666e0d452fbd
│  │  │  │  │  ├─ 8779d52064b4ede7589fd4f0f558d578aab39e868fff98632f7ac1228a2cff29
│  │  │  │  │  ├─ 8797862bca2b5cf923c4ac8254fbc675fbef42fef69cf2a26c0526876c902872
│  │  │  │  │  ├─ 87eb0f27e64ad3a2334c1df591179edc5964485569a69a4894db5e5f8aa015a6
│  │  │  │  │  ├─ 898f4bef35e8c2b414632d301edbea85f953ef996d03b2fdc973816d55980cfb
│  │  │  │  │  ├─ 8c38c53fc043f8c430b6344887aab1fd5aa86d26f5fe3ae06b75dede316249c3
│  │  │  │  │  ├─ 8df8b6a32b6bded076636f79f074b2f5633076028c2f9265461be9c14688e85d
│  │  │  │  │  ├─ 8f210ef95889ded131562cbf1247535b191568dce2816b2f98867d07280a5376
│  │  │  │  │  ├─ 90ab82bdf03d0fd9204751883d5b9ac38ca528fe84176af0c7d1db5e3b905a30
│  │  │  │  │  ├─ 913891681797fc3731290452521b53b36342ab80e2a35e3110d31ac4671a7292
│  │  │  │  │  ├─ 92d15c45bfa85b86f741296c0d34cf3fc6f3f953a663b948e8ea0280113f35e4
│  │  │  │  │  ├─ 93a3b30dbfc4ff12f056917c63f1e25d8133285b39cc1235dc7b78b768e1accc
│  │  │  │  │  ├─ 946bd0750bf8959d9279f3e0b531235f0156707b8bbdff3ffd1ccfffd7acd8dc
│  │  │  │  │  ├─ 9594a5a8f8cb3b352e6d8e84a2d7f4667fd14b91501eb39fd1b07a7426fc943a
│  │  │  │  │  ├─ 9660375f09ec947fd2b7e739252029b3f768e1cc16f885befd9cf69c60db7500
│  │  │  │  │  ├─ 97fc2c3bf56a145b7505640e4b7e72e7e49535f4cd4b22dc8c06a5d96cb5d5e0
│  │  │  │  │  ├─ 994c5843c26786de207a6bc330eb96e37a9211678dd4d8c38d7db1162f146451
│  │  │  │  │  ├─ 9e6ad0b5011723d881527e005da3beea78d692628ace1f837eb4f59c618959d6
│  │  │  │  │  ├─ a0a312e953782cbe738fa22739cb691a87401c94a22aa75476768fa0441fdccb
│  │  │  │  │  ├─ a0f71f74774d0d0f808eca4d13b1c4736405c82f322d5d429a70df60f0243cc6
│  │  │  │  │  ├─ a393e04945e1ebf8e8640117dcd272634543552876e24bd037ddc8b0b85ddbef
│  │  │  │  │  ├─ a5d2cbdd6f3bc023233001954fac5013c7bdac0e76be7cc6193780f8fbaee904
│  │  │  │  │  ├─ abc4884a98a0bb1b3a552115b4f4bfd56a37fd4d306b744299b738747a084670
│  │  │  │  │  ├─ af74bd6fcaa806cca6738edd5a1136a4d8f78e944ab6aff35af92a34d8ec8111
│  │  │  │  │  ├─ b248cf6d1189adb4aa98ac16036171e3ecfcbdbe32449b732f2f2910148b0663
│  │  │  │  │  ├─ b5578a0efeffc0aa4e490bcfa786d47ed751b6fd198fecf65d6ef2263e5a5930
│  │  │  │  │  ├─ b6af1fd0cceee710a0bee9e77d800007e33ee5e91e9b4654d3006aae8a3e9210
│  │  │  │  │  ├─ b6e8c5d73cc895ffcd475972f681fef35c0fda3cf64bb7a6cc91cb608c1b8623
│  │  │  │  │  ├─ b88606f84779637048a8b0d5f772801b2dc4899c7109dc91d3f013c7c082bc9a
│  │  │  │  │  ├─ b977247e54aef4470d9eb081831f79f6b4b4dce2a636c6917fad95765fc24f9d
│  │  │  │  │  ├─ be2bd43f0bb60e9e74943abd5712d59f79e929f4eddbee70676ec805d3e3e049
│  │  │  │  │  ├─ bf8c4426da007b4ce084966e235ee48848f8bd209e2b754aed78e0c6abb1ef5c
│  │  │  │  │  ├─ c01ddff31153a6492722ec9f1c1c914f95efeffa4edc5796c014820a3f3d8040
│  │  │  │  │  ├─ c08757199f1e049d5a8da94e5398e96cbc4f6a46b659db23c2293d1068756b80
│  │  │  │  │  ├─ c1705273d74ab3f72abe6c7fe74974f890c6ba80eb8ceaf15f68c33704534e16
│  │  │  │  │  ├─ c720c181935cefaa511fbe79744b4c478ece59fbe5ae7ea8e69e0fc4c4964097
│  │  │  │  │  ├─ c7fd4ad304e61fc4a60d07434d75fef1efdf217f6b34046d1cae2412ea2a2bc6
│  │  │  │  │  ├─ cc24a2f0b2a9bb0a3744d072d88e06214c044ffcd9f02e6707cb40cac4324b67
│  │  │  │  │  ├─ cc5128f82acd4151ea8715d7084b6c9bffd71319286f1bae3b7295a7ad9dbc54
│  │  │  │  │  ├─ d24ec8cebcdf00c92cf63e26ee03d4146123839fff6710bccd74747e4547d8cd
│  │  │  │  │  ├─ daf9942e2188bdf5a48e0e624258ceb1caee3bd352c014965291fdc2f1780be5
│  │  │  │  │  ├─ dcd39fc60749c3c718cdedfd2223c9cd77473c5239e252d7fe6df7300f3c916a
│  │  │  │  │  ├─ ddfe36109bbe4c3ec5e28cbe88cb4d3779766c1cb89a483ef2cfd3c738e71c90
│  │  │  │  │  ├─ dedaebf4087459d68c48d0775000308bfbf10c51fbad31eb03ee5399af58c7e2
│  │  │  │  │  ├─ df11ca78b6e6311e2680dcb269684b5a96e8c1fefc87c67f4e8c0246145bf344
│  │  │  │  │  ├─ df5f8bf029566355a8c8fdb5ba9d99bfea29c1781b51b1e6b3ace37aec61bf56
│  │  │  │  │  ├─ e16abca481bade2781877c5a853fdf5e7e941ac5267e5444cb0a5c8c4deb6af9
│  │  │  │  │  ├─ e50591a92589e24e95bab4f238b6410decb13f3ef5f58785c50e47158ea8dc10
│  │  │  │  │  ├─ e7b7bdfd2e2c0c702a6d9ea614f7a48d607bc61c78db4409f245c541af59c66d
│  │  │  │  │  ├─ e8a7b1f015341353ba5dc7db6a9863c5eb808c9a1003bf59af5a58deeeae21cc
│  │  │  │  │  ├─ ec47a8d9f084db42da2c17aff9b5cfc6b8d7e4a00d70353a8b67332f0af7cf85
│  │  │  │  │  ├─ f4164583f16408c09068b9a9e943b5fcb3d1eacb996e2bba714b24af59ca33ea
│  │  │  │  │  ├─ f78ad07235d1432ce12c8224e17a1ed2655ff3f35eeed10a1d147c102f1ab55e
│  │  │  │  │  ├─ f9f4556c2c8eb9b4a7d7388cb86d445cbe307230a3d08ac5c856db8fc98ed942
│  │  │  │  │  ├─ f9fcdd2e4caae2d20b9038313e37078e3e4359d5419f8131936002e99e31fe3a
│  │  │  │  │  ├─ fa91f8a54623a5e4cb36ee1631a5e9ca67626f397cd4618913d09015b541658f
│  │  │  │  │  ├─ fd57497f12530f17353bf4dac818dd9bef9b1dd4c18d8a99f2768a2457980646
│  │  │  │  │  ├─ ff305d12e9250378206e383df2abf5db3740c80ed3ac94dfeb12578d55773381
│  │  │  │  │  └─ tags-manifest.json
│  │  │  │  ├─ images
│  │  │  │  │  ├─ dGd5Ips8JP+YMofjYVHfs0SNtZMnNkryby9i9BRyDE8=
│  │  │  │  │  │  └─ 60.1717256236101.pfeT92U34TBlVxPEhnrLPwMI3mQw5MlmljeBEfpeDi8=.webp
│  │  │  │  │  └─ WFLyvCeC3Q93lY0xL0e9-+CuDTgIOR0rbmidCHD11pA=
│  │  │  │  │     └─ 60.1717334550639.pfeT92U34TBlVxPEhnrLPwMI3mQw5MlmljeBEfpeDi8=.webp
│  │  │  │  ├─ swc
│  │  │  │  │  └─ plugins
│  │  │  │  │     └─ v7_windows_x86_64_0.106.15
│  │  │  │  └─ webpack
│  │  │  │     ├─ client-development
│  │  │  │     │  ├─ 0.pack.gz
│  │  │  │     │  ├─ 1.pack.gz
│  │  │  │     │  ├─ 10.pack.gz
│  │  │  │     │  ├─ 11.pack.gz
│  │  │  │     │  ├─ 12.pack.gz
│  │  │  │     │  ├─ 13.pack.gz
│  │  │  │     │  ├─ 14.pack.gz
│  │  │  │     │  ├─ 15.pack.gz
│  │  │  │     │  ├─ 16.pack.gz
│  │  │  │     │  ├─ 17.pack.gz
│  │  │  │     │  ├─ 18.pack.gz
│  │  │  │     │  ├─ 19.pack.gz
│  │  │  │     │  ├─ 2.pack.gz
│  │  │  │     │  ├─ 20.pack.gz
│  │  │  │     │  ├─ 21.pack.gz
│  │  │  │     │  ├─ 22.pack.gz
│  │  │  │     │  ├─ 23.pack.gz
│  │  │  │     │  ├─ 3.pack.gz
│  │  │  │     │  ├─ 4.pack.gz
│  │  │  │     │  ├─ 5.pack.gz
│  │  │  │     │  ├─ 6.pack.gz
│  │  │  │     │  ├─ 7.pack.gz
│  │  │  │     │  ├─ 8.pack.gz
│  │  │  │     │  ├─ 9.pack.gz
│  │  │  │     │  ├─ index.pack.gz
│  │  │  │     │  └─ index.pack.gz.old
│  │  │  │     ├─ client-development-fallback
│  │  │  │     │  ├─ 0.pack.gz
│  │  │  │     │  ├─ 1.pack.gz
│  │  │  │     │  ├─ 2.pack.gz
│  │  │  │     │  ├─ index.pack.gz
│  │  │  │     │  └─ index.pack.gz.old
│  │  │  │     └─ server-development
│  │  │  │        ├─ 0.pack.gz
│  │  │  │        ├─ 1.pack.gz
│  │  │  │        ├─ 10.pack.gz
│  │  │  │        ├─ 11.pack.gz
│  │  │  │        ├─ 12.pack.gz
│  │  │  │        ├─ 13.pack.gz
│  │  │  │        ├─ 14.pack.gz
│  │  │  │        ├─ 15.pack.gz
│  │  │  │        ├─ 16.pack.gz
│  │  │  │        ├─ 17.pack.gz
│  │  │  │        ├─ 18.pack.gz
│  │  │  │        ├─ 19.pack.gz
│  │  │  │        ├─ 2.pack.gz
│  │  │  │        ├─ 20.pack.gz
│  │  │  │        ├─ 21.pack.gz
│  │  │  │        ├─ 22.pack.gz
│  │  │  │        ├─ 23.pack.gz
│  │  │  │        ├─ 3.pack.gz
│  │  │  │        ├─ 4.pack.gz
│  │  │  │        ├─ 5.pack.gz
│  │  │  │        ├─ 6.pack.gz
│  │  │  │        ├─ 7.pack.gz
│  │  │  │        ├─ 8.pack.gz
│  │  │  │        ├─ 9.pack.gz
│  │  │  │        ├─ index.pack.gz
│  │  │  │        └─ index.pack.gz.old
│  │  │  ├─ package.json
│  │  │  ├─ react-loadable-manifest.json
│  │  │  ├─ server
│  │  │  │  ├─ app
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page_client-reference-manifest.js
│  │  │  │  │  ├─ posts
│  │  │  │  │  │  └─ [uid]
│  │  │  │  │  │     ├─ page.js
│  │  │  │  │  │     └─ page_client-reference-manifest.js
│  │  │  │  │  └─ [uid]
│  │  │  │  │     ├─ page.js
│  │  │  │  │     └─ page_client-reference-manifest.js
│  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  ├─ interception-route-rewrite-manifest.js
│  │  │  │  ├─ middleware-build-manifest.js
│  │  │  │  ├─ middleware-manifest.json
│  │  │  │  ├─ middleware-react-loadable-manifest.js
│  │  │  │  ├─ next-font-manifest.js
│  │  │  │  ├─ next-font-manifest.json
│  │  │  │  ├─ pages-manifest.json
│  │  │  │  ├─ server-reference-manifest.js
│  │  │  │  ├─ server-reference-manifest.json
│  │  │  │  ├─ vendor-chunks
│  │  │  │  │  ├─ @fortawesome.js
│  │  │  │  │  ├─ @prismicio.js
│  │  │  │  │  ├─ @swc.js
│  │  │  │  │  ├─ clsx.js
│  │  │  │  │  ├─ imgix-url-builder.js
│  │  │  │  │  ├─ next.js
│  │  │  │  │  ├─ object-assign.js
│  │  │  │  │  ├─ prop-types.js
│  │  │  │  │  └─ react-is.js
│  │  │  │  ├─ webpack-runtime.js
│  │  │  │  └─ _rsc_src_slices_MainImage_index_tsx.js
│  │  │  ├─ static
│  │  │  │  ├─ chunks
│  │  │  │  │  ├─ app
│  │  │  │  │  │  ├─ layout.js
│  │  │  │  │  │  ├─ page.js
│  │  │  │  │  │  ├─ posts
│  │  │  │  │  │  │  └─ [uid]
│  │  │  │  │  │  │     └─ page.js
│  │  │  │  │  │  └─ [uid]
│  │  │  │  │  │     └─ page.js
│  │  │  │  │  ├─ app-pages-internals.js
│  │  │  │  │  ├─ main-app.js
│  │  │  │  │  ├─ polyfills.js
│  │  │  │  │  └─ webpack.js
│  │  │  │  ├─ css
│  │  │  │  │  └─ app
│  │  │  │  │     └─ layout.css
│  │  │  │  ├─ development
│  │  │  │  │  ├─ _buildManifest.js
│  │  │  │  │  └─ _ssgManifest.js
│  │  │  │  ├─ media
│  │  │  │  │  ├─ 05a31a2ca4975f99-s.woff2
│  │  │  │  │  ├─ 513657b02c5c193f-s.woff2
│  │  │  │  │  ├─ 51ed15f9841b9f9d-s.woff2
│  │  │  │  │  ├─ bg_bggenerator_com.d3fe4169.jpg
│  │  │  │  │  ├─ bg_bggenerator_com_dark.d4bc4fbc.jpg
│  │  │  │  │  ├─ c9a5bc6a7c948fb0-s.p.woff2
│  │  │  │  │  ├─ d6b16ce4a6175f26-s.woff2
│  │  │  │  │  ├─ ec159349637c90ad-s.woff2
│  │  │  │  │  ├─ fd4db3eb5472fc27-s.woff2
│  │  │  │  │  └─ not-found.73874b25.jpg
│  │  │  │  └─ webpack
│  │  │  │     ├─ 52dd6a7b0feb2410.webpack.hot-update.json
│  │  │  │     ├─ 633457081244afec._.hot-update.json
│  │  │  │     ├─ 6aa2fa92677ee3f3.webpack.hot-update.json
│  │  │  │     ├─ app
│  │  │  │     │  └─ layout.52dd6a7b0feb2410.hot-update.js
│  │  │  │     ├─ webpack.52dd6a7b0feb2410.hot-update.js
│  │  │  │     └─ webpack.6aa2fa92677ee3f3.hot-update.js
│  │  │  ├─ trace
│  │  │  └─ types
│  │  │     ├─ app
│  │  │     │  ├─ layout.ts
│  │  │     │  ├─ page.ts
│  │  │     │  ├─ posts
│  │  │     │  │  └─ [uid]
│  │  │     │  │     └─ page.ts
│  │  │     │  └─ [uid]
│  │  │     │     └─ page.ts
│  │  │     └─ package.json
│  │  ├─ customtypes
│  │  │  ├─ blog_post
│  │  │  │  └─ index.json
│  │  │  ├─ home
│  │  │  │  └─ index.json
│  │  │  ├─ homepage
│  │  │  │  └─ index.json
│  │  │  └─ post_category
│  │  │     └─ index.json
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.mjs
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ prismicio-types.d.ts
│  │  ├─ public
│  │  │  ├─ next.svg
│  │  │  └─ vercel.svg
│  │  ├─ README.md
│  │  ├─ slicemachine.config.json
│  │  ├─ src
│  │  │  ├─ app
│  │  │  │  ├─ api
│  │  │  │  │  ├─ exit-preview
│  │  │  │  │  │  └─ route.ts
│  │  │  │  │  ├─ preview
│  │  │  │  │  │  └─ route.ts
│  │  │  │  │  └─ revalidate
│  │  │  │  │     └─ route.ts
│  │  │  │  ├─ favicon.ico
│  │  │  │  ├─ globals.css
│  │  │  │  ├─ layout.tsx
│  │  │  │  ├─ metadata.ts
│  │  │  │  ├─ page.tsx
│  │  │  │  ├─ posts
│  │  │  │  │  └─ [uid]
│  │  │  │  │     └─ page.tsx
│  │  │  │  ├─ slice-simulator
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ [uid]
│  │  │  │     └─ page.tsx
│  │  │  ├─ components
│  │  │  │  ├─ footer
│  │  │  │  │  └─ footer.tsx
│  │  │  │  ├─ header
│  │  │  │  │  ├─ hamburguer-animations.css
│  │  │  │  │  └─ header.tsx
│  │  │  │  ├─ icons
│  │  │  │  │  ├─ dice-icon.tsx
│  │  │  │  │  ├─ dire-icon.tsx
│  │  │  │  │  ├─ home-icon.tsx
│  │  │  │  │  └─ search-icon.tsx
│  │  │  │  ├─ main-image
│  │  │  │  │  └─ main-image.tsx
│  │  │  │  ├─ menu
│  │  │  │  │  ├─ menu.css
│  │  │  │  │  └─ menu.tsx
│  │  │  │  ├─ post-card
│  │  │  │  │  └─ post-card.tsx
│  │  │  │  ├─ switch
│  │  │  │  │  ├─ switch.css
│  │  │  │  │  └─ switch.tsx
│  │  │  │  ├─ theme
│  │  │  │  │  └─ theme.tsx
│  │  │  │  └─ true-header
│  │  │  │     └─ true-header.tsx
│  │  │  ├─ context
│  │  │  │  └─ theme-context.tsx
│  │  │  ├─ images
│  │  │  │  ├─ bg_bggenerator_com.jpg
│  │  │  │  ├─ bg_bggenerator_com_dark.jpg
│  │  │  │  ├─ mysql-workbench-community-8.0.36-winx64.msi
│  │  │  │  └─ not-found.jpg
│  │  │  ├─ pages
│  │  │  │  └─ _app.tsx
│  │  │  ├─ prismicio.ts
│  │  │  └─ slices
│  │  │     ├─ index.ts
│  │  │     ├─ MainImage
│  │  │     │  ├─ index.tsx
│  │  │     │  ├─ mocks.json
│  │  │     │  ├─ model.json
│  │  │     │  ├─ screenshot-default.png
│  │  │     │  └─ screenshot-mainImageNoCategory.png
│  │  │     └─ SinglePost
│  │  │        └─ index.tsx
│  │  ├─ tailwind.config.ts
│  │  └─ tsconfig.json
│  ├─ package-lock.json
│  ├─ package.json
│  └─ README.md
├─ 6-CrudMembros
│  ├─ CrudMembros
│  │  ├─ .env
│  │  ├─ .gitignore
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ prisma
│  │  │  ├─ schema.prisma
│  │  │  └─ seed.ts
│  │  └─ src
│  │     ├─ index.ts
│  │     ├─ member
│  │     │  ├─ member.router.ts
│  │     │  └─ member.service.ts
│  │     └─ utils
│  │        └─ db.server.ts
│  └─ README.md
├─ 7-Lapadarie (Em Dupla)
│  ├─ backend
│  │  ├─ .dockerignore
│  │  ├─ .env
│  │  ├─ .gitignore
│  │  ├─ .prettierrc
│  │  ├─ api
│  │  │  └─ Dockerfile
│  │  ├─ dist
│  │  │  ├─ bread
│  │  │  │  └─ bread.router.js
│  │  │  ├─ index.js
│  │  │  ├─ order
│  │  │  │  └─ order.router.js
│  │  │  └─ utils
│  │  │     └─ db.server.js
│  │  ├─ docker-compose.yml
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ prisma
│  │  │  ├─ migrations
│  │  │  │  ├─ 20240611223854_init
│  │  │  │  │  └─ migration.sql
│  │  │  │  └─ migration_lock.toml
│  │  │  ├─ schema.prisma
│  │  │  └─ seed.ts
│  │  ├─ README.md
│  │  ├─ src
│  │  │  ├─ bread
│  │  │  │  └─ bread.router.ts
│  │  │  ├─ index.ts
│  │  │  ├─ order
│  │  │  │  ├─ order.router.ts
│  │  │  │  ├─ order.service.ts
│  │  │  │  └─ orderTreatment.ts
│  │  │  └─ utils
│  │  │     ├─ dataTypes.ts
│  │  │     └─ db.server.ts
│  │  └─ tsconfig.json
│  ├─ lapadarie
│  │  ├─ .eslintrc.json
│  │  ├─ .next
│  │  │  ├─ app-build-manifest.json
│  │  │  ├─ build-manifest.json
│  │  │  ├─ cache
│  │  │  │  ├─ fetch-cache
│  │  │  │  │  └─ 610ab6dcd0af819cdc75b286664c13c171caf8c0967e553f8c6d097a1e41938d
│  │  │  │  ├─ swc
│  │  │  │  │  └─ plugins
│  │  │  │  │     └─ v7_windows_x86_64_0.106.15
│  │  │  │  └─ webpack
│  │  │  │     ├─ client-development
│  │  │  │     │  ├─ 0.pack.gz
│  │  │  │     │  ├─ 1.pack.gz
│  │  │  │     │  ├─ 10.pack.gz
│  │  │  │     │  ├─ 11.pack.gz
│  │  │  │     │  ├─ 12.pack.gz
│  │  │  │     │  ├─ 13.pack.gz
│  │  │  │     │  ├─ 14.pack.gz
│  │  │  │     │  ├─ 2.pack.gz
│  │  │  │     │  ├─ 3.pack.gz
│  │  │  │     │  ├─ 4.pack.gz
│  │  │  │     │  ├─ 5.pack.gz
│  │  │  │     │  ├─ 6.pack.gz
│  │  │  │     │  ├─ 7.pack.gz
│  │  │  │     │  ├─ 8.pack.gz
│  │  │  │     │  ├─ 9.pack.gz
│  │  │  │     │  ├─ index.pack.gz
│  │  │  │     │  └─ index.pack.gz.old
│  │  │  │     ├─ client-development-fallback
│  │  │  │     │  ├─ 0.pack.gz
│  │  │  │     │  └─ index.pack.gz
│  │  │  │     └─ server-development
│  │  │  │        ├─ 0.pack.gz
│  │  │  │        ├─ 1.pack.gz
│  │  │  │        ├─ 10.pack.gz
│  │  │  │        ├─ 11.pack.gz
│  │  │  │        ├─ 12.pack.gz
│  │  │  │        ├─ 2.pack.gz
│  │  │  │        ├─ 3.pack.gz
│  │  │  │        ├─ 4.pack.gz
│  │  │  │        ├─ 5.pack.gz
│  │  │  │        ├─ 6.pack.gz
│  │  │  │        ├─ 7.pack.gz
│  │  │  │        ├─ 8.pack.gz
│  │  │  │        ├─ 9.pack.gz
│  │  │  │        ├─ index.pack.gz
│  │  │  │        └─ index.pack.gz.old
│  │  │  ├─ fallback-build-manifest.json
│  │  │  ├─ package.json
│  │  │  ├─ react-loadable-manifest.json
│  │  │  ├─ server
│  │  │  │  ├─ app
│  │  │  │  │  ├─ icon.ico
│  │  │  │  │  │  └─ route.js
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page_client-reference-manifest.js
│  │  │  │  │  └─ _not-found
│  │  │  │  │     ├─ page.js
│  │  │  │  │     └─ page_client-reference-manifest.js
│  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  ├─ interception-route-rewrite-manifest.js
│  │  │  │  ├─ middleware-build-manifest.js
│  │  │  │  ├─ middleware-manifest.json
│  │  │  │  ├─ middleware-react-loadable-manifest.js
│  │  │  │  ├─ next-font-manifest.js
│  │  │  │  ├─ next-font-manifest.json
│  │  │  │  ├─ pages
│  │  │  │  │  ├─ _app.js
│  │  │  │  │  ├─ _document.js
│  │  │  │  │  └─ _error.js
│  │  │  │  ├─ pages-manifest.json
│  │  │  │  ├─ server-reference-manifest.js
│  │  │  │  ├─ server-reference-manifest.json
│  │  │  │  ├─ vendor-chunks
│  │  │  │  │  ├─ @emotion.js
│  │  │  │  │  ├─ @swc.js
│  │  │  │  │  ├─ next.js
│  │  │  │  │  ├─ shallowequal.js
│  │  │  │  │  ├─ styled-components.js
│  │  │  │  │  └─ stylis.js
│  │  │  │  ├─ webpack-runtime.js
│  │  │  │  └─ _error.js
│  │  │  ├─ static
│  │  │  │  ├─ chunks
│  │  │  │  │  ├─ app
│  │  │  │  │  │  ├─ layout.js
│  │  │  │  │  │  ├─ page.js
│  │  │  │  │  │  └─ _not-found
│  │  │  │  │  │     └─ page.js
│  │  │  │  │  ├─ app-pages-internals.js
│  │  │  │  │  ├─ fallback
│  │  │  │  │  │  ├─ amp.js
│  │  │  │  │  │  ├─ main.js
│  │  │  │  │  │  ├─ pages
│  │  │  │  │  │  │  ├─ _app.js
│  │  │  │  │  │  │  └─ _error.js
│  │  │  │  │  │  ├─ react-refresh.js
│  │  │  │  │  │  └─ webpack.js
│  │  │  │  │  ├─ main-app.js
│  │  │  │  │  ├─ main.js
│  │  │  │  │  ├─ pages
│  │  │  │  │  │  ├─ _app.js
│  │  │  │  │  │  └─ _error.js
│  │  │  │  │  ├─ polyfills.js
│  │  │  │  │  ├─ react-refresh.js
│  │  │  │  │  ├─ webpack.js
│  │  │  │  │  └─ _error.js
│  │  │  │  ├─ css
│  │  │  │  │  └─ app
│  │  │  │  │     └─ layout.css
│  │  │  │  ├─ development
│  │  │  │  │  ├─ _buildManifest.js
│  │  │  │  │  └─ _ssgManifest.js
│  │  │  │  ├─ media
│  │  │  │  │  ├─ 0484562807a97172-s.p.woff2
│  │  │  │  │  ├─ 0a03a6d30c07af2e-s.woff2
│  │  │  │  │  ├─ 30cd8f99d32fa6e8-s.woff2
│  │  │  │  │  ├─ 3f9466fc53690ba7-s.woff2
│  │  │  │  │  ├─ 46c21389e888bf13-s.woff2
│  │  │  │  │  ├─ 4c285fdca692ea22-s.p.woff2
│  │  │  │  │  ├─ 6245472ced48d3be-s.p.woff2
│  │  │  │  │  ├─ 7108afb8b1381ad1-s.p.woff2
│  │  │  │  │  ├─ 7db6c35d839a711c-s.p.woff2
│  │  │  │  │  ├─ 8888a3826f4a3af4-s.p.woff2
│  │  │  │  │  ├─ 8d346445d24062b5-s.woff2
│  │  │  │  │  ├─ 94575ae3783e7c88-s.woff2
│  │  │  │  │  ├─ 9e82d62334b205f4-s.p.woff2
│  │  │  │  │  ├─ b957ea75a84b6ea7-s.p.woff2
│  │  │  │  │  ├─ dfa2ccbeca9e77a8-s.woff2
│  │  │  │  │  ├─ eafabf029ad39a43-s.p.woff2
│  │  │  │  │  ├─ f5767adec246cdc1-s.woff2
│  │  │  │  │  └─ f7099cae2a5aa83f-s.woff2
│  │  │  │  └─ webpack
│  │  │  │     ├─ 06f0b44b1cf58e79.webpack.hot-update.json
│  │  │  │     ├─ 0ba693b739d44ace.webpack.hot-update.json
│  │  │  │     ├─ 0d78b8fd78b190c0.webpack.hot-update.json
│  │  │  │     ├─ 174a108b0ed68cfb.webpack.hot-update.json
│  │  │  │     ├─ 27f1491fbf29a05c.webpack.hot-update.json
│  │  │  │     ├─ 3469b2daa67c1742.webpack.hot-update.json
│  │  │  │     ├─ 3c1f9fb9bd2c0ac2.webpack.hot-update.json
│  │  │  │     ├─ 403fe8b350a1d504.webpack.hot-update.json
│  │  │  │     ├─ 526bfb5830427ea8.webpack.hot-update.json
│  │  │  │     ├─ 5b00b32b7f0e40c7.webpack.hot-update.json
│  │  │  │     ├─ 5ecc7db28f8bfc3f.webpack.hot-update.json
│  │  │  │     ├─ 6263cfa8c066afb9.webpack.hot-update.json
│  │  │  │     ├─ 633457081244afec._.hot-update.json
│  │  │  │     ├─ 6560a4d3a904a808.webpack.hot-update.json
│  │  │  │     ├─ 6bdcdfb1a969b146.webpack.hot-update.json
│  │  │  │     ├─ 898044dbce3f4521.webpack.hot-update.json
│  │  │  │     ├─ 8a6d0c3bd3c8752c.webpack.hot-update.json
│  │  │  │     ├─ 91333bb5516f5f5a.webpack.hot-update.json
│  │  │  │     ├─ 918338a2f6f4091d.webpack.hot-update.json
│  │  │  │     ├─ 97f5dca30d7b69d1.webpack.hot-update.json
│  │  │  │     ├─ 99f1f80ee2ca7ef2.webpack.hot-update.json
│  │  │  │     ├─ 9dfadabaab53d4ef.webpack.hot-update.json
│  │  │  │     ├─ acec74a637971e76.webpack.hot-update.json
│  │  │  │     ├─ app
│  │  │  │     │  ├─ layout.6bdcdfb1a969b146.hot-update.js
│  │  │  │     │  ├─ layout.8a6d0c3bd3c8752c.hot-update.js
│  │  │  │     │  ├─ page.06f0b44b1cf58e79.hot-update.js
│  │  │  │     │  ├─ page.0ba693b739d44ace.hot-update.js
│  │  │  │     │  ├─ page.0d78b8fd78b190c0.hot-update.js
│  │  │  │     │  ├─ page.174a108b0ed68cfb.hot-update.js
│  │  │  │     │  ├─ page.27f1491fbf29a05c.hot-update.js
│  │  │  │     │  ├─ page.3469b2daa67c1742.hot-update.js
│  │  │  │     │  ├─ page.403fe8b350a1d504.hot-update.js
│  │  │  │     │  ├─ page.526bfb5830427ea8.hot-update.js
│  │  │  │     │  ├─ page.5b00b32b7f0e40c7.hot-update.js
│  │  │  │     │  ├─ page.5ecc7db28f8bfc3f.hot-update.js
│  │  │  │     │  ├─ page.6263cfa8c066afb9.hot-update.js
│  │  │  │     │  ├─ page.6560a4d3a904a808.hot-update.js
│  │  │  │     │  ├─ page.898044dbce3f4521.hot-update.js
│  │  │  │     │  ├─ page.91333bb5516f5f5a.hot-update.js
│  │  │  │     │  ├─ page.97f5dca30d7b69d1.hot-update.js
│  │  │  │     │  ├─ page.99f1f80ee2ca7ef2.hot-update.js
│  │  │  │     │  ├─ page.9dfadabaab53d4ef.hot-update.js
│  │  │  │     │  ├─ page.acec74a637971e76.hot-update.js
│  │  │  │     │  ├─ page.b6421a103835716f.hot-update.js
│  │  │  │     │  ├─ page.bdbcc51c2625db2f.hot-update.js
│  │  │  │     │  ├─ page.c36ac1ef0e8ea151.hot-update.js
│  │  │  │     │  ├─ page.ca87d6d1ed796f51.hot-update.js
│  │  │  │     │  ├─ page.cbdcb49e74e65419.hot-update.js
│  │  │  │     │  ├─ page.d011d4aa0924d439.hot-update.js
│  │  │  │     │  ├─ page.e3398f6f2f875668.hot-update.js
│  │  │  │     │  └─ page.ecdabba4396e7d31.hot-update.js
│  │  │  │     ├─ b6421a103835716f.webpack.hot-update.json
│  │  │  │     ├─ bdbcc51c2625db2f.webpack.hot-update.json
│  │  │  │     ├─ c36ac1ef0e8ea151.webpack.hot-update.json
│  │  │  │     ├─ ca87d6d1ed796f51.webpack.hot-update.json
│  │  │  │     ├─ cbdcb49e74e65419.webpack.hot-update.json
│  │  │  │     ├─ d011d4aa0924d439.webpack.hot-update.json
│  │  │  │     ├─ e3398f6f2f875668.webpack.hot-update.json
│  │  │  │     ├─ ecdabba4396e7d31.webpack.hot-update.json
│  │  │  │     ├─ webpack.06f0b44b1cf58e79.hot-update.js
│  │  │  │     ├─ webpack.0ba693b739d44ace.hot-update.js
│  │  │  │     ├─ webpack.0d78b8fd78b190c0.hot-update.js
│  │  │  │     ├─ webpack.174a108b0ed68cfb.hot-update.js
│  │  │  │     ├─ webpack.27f1491fbf29a05c.hot-update.js
│  │  │  │     ├─ webpack.3469b2daa67c1742.hot-update.js
│  │  │  │     ├─ webpack.3c1f9fb9bd2c0ac2.hot-update.js
│  │  │  │     ├─ webpack.403fe8b350a1d504.hot-update.js
│  │  │  │     ├─ webpack.526bfb5830427ea8.hot-update.js
│  │  │  │     ├─ webpack.5b00b32b7f0e40c7.hot-update.js
│  │  │  │     ├─ webpack.5ecc7db28f8bfc3f.hot-update.js
│  │  │  │     ├─ webpack.6263cfa8c066afb9.hot-update.js
│  │  │  │     ├─ webpack.6560a4d3a904a808.hot-update.js
│  │  │  │     ├─ webpack.6bdcdfb1a969b146.hot-update.js
│  │  │  │     ├─ webpack.898044dbce3f4521.hot-update.js
│  │  │  │     ├─ webpack.8a6d0c3bd3c8752c.hot-update.js
│  │  │  │     ├─ webpack.91333bb5516f5f5a.hot-update.js
│  │  │  │     ├─ webpack.918338a2f6f4091d.hot-update.js
│  │  │  │     ├─ webpack.97f5dca30d7b69d1.hot-update.js
│  │  │  │     ├─ webpack.99f1f80ee2ca7ef2.hot-update.js
│  │  │  │     ├─ webpack.9dfadabaab53d4ef.hot-update.js
│  │  │  │     ├─ webpack.acec74a637971e76.hot-update.js
│  │  │  │     ├─ webpack.b6421a103835716f.hot-update.js
│  │  │  │     ├─ webpack.bdbcc51c2625db2f.hot-update.js
│  │  │  │     ├─ webpack.c36ac1ef0e8ea151.hot-update.js
│  │  │  │     ├─ webpack.ca87d6d1ed796f51.hot-update.js
│  │  │  │     ├─ webpack.cbdcb49e74e65419.hot-update.js
│  │  │  │     ├─ webpack.d011d4aa0924d439.hot-update.js
│  │  │  │     ├─ webpack.e3398f6f2f875668.hot-update.js
│  │  │  │     └─ webpack.ecdabba4396e7d31.hot-update.js
│  │  │  ├─ trace
│  │  │  └─ types
│  │  │     ├─ app
│  │  │     │  ├─ layout.ts
│  │  │     │  └─ page.ts
│  │  │     └─ package.json
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.mjs
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ public
│  │  │  ├─ cart.svg
│  │  │  ├─ cypher.png
│  │  │  ├─ cypher.svg
│  │  │  ├─ logo.svg
│  │  │  ├─ next.svg
│  │  │  ├─ people.svg
│  │  │  ├─ trashcan.svg
│  │  │  └─ vercel.svg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  └─ app
│  │  │     ├─ components
│  │  │     │  ├─ Header.tsx
│  │  │     │  ├─ Main.tsx
│  │  │     │  ├─ Order.tsx
│  │  │     │  └─ ServerComponents.tsx
│  │  │     ├─ globals.css
│  │  │     ├─ icon.ico
│  │  │     ├─ layout.tsx
│  │  │     └─ page.tsx
│  │  ├─ tailwind.config.ts
│  │  └─ tsconfig.json
│  └─ README.md
└─ README.md

```