pipeline{
    agent any
    tools{
        nodejs "node 16.17.0"
    }

    stages{
        stage('Clonar Repositorio'){
            steps{
                checkout([$class:'GitSCM', branches:[[name:'*/main']], userRemoteConfigs:[[url:'https://github.com/ingegnereLiandi/devops_jenkins-ci.git']]])
            }
        }

        stage('Instalar dependencias'){
            steps{
                bat 'node -v'
                bat 'npm install'    
            }
        }
    
       stage('Executar Testes') {
            steps { 
                bat 'npx cypress run --config-file devops_jenkins-ci/cypress/cypress.config.js'     
                dir('repositorio.it/devops_jenkins-ci'){ 
                    bat 'npx cypress run'
                     
                   }
                }
            }
        }
    }

