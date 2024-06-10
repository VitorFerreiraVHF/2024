import { Module } from '@nestjs/common';
import { PrismaProvider } from './Provider/prisma';
import { UsuarioService } from 'src/Application/Services/usuario.service';
import { UsuarioController } from 'src/Presentation/Api/Controllers/usuario.controller';
import { GrupoService } from 'src/Application/Services/grupo.service';
import { GrupoController } from 'src/Presentation/Api/Controllers/grupo.controller';
import { UsuarioGrupoService } from 'src/Application/Services/usuarioGrupo.service';
import { UsuarioGrupoController } from 'src/Presentation/Api/Controllers/usuarioGrupo.controller';
import { AuthService } from 'src/Application/Services/auth.service';
import { AuthController } from 'src/Presentation/Api/Controllers/auth.controller';

@Module({
  controllers: [
    UsuarioController,
    GrupoController,
    UsuarioGrupoController,
    AuthController
  ],
  providers: [    

    //provider
    PrismaProvider,

    // services
    UsuarioService,
    GrupoService,
    UsuarioGrupoService,
    AuthService
    
  ]
})
export class AppModule {}
