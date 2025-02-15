<?php
define( 'WP_CACHE', true );
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', "avant" );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', "root" );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', "" );

/** Nome do host do MySQL */
define( 'DB_HOST', "localhost" );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '(n&*n/3]Ksk.u;ymy?vA{ql@pPFSfWL%cspV#G(w_Vv7Z#[<b@/wR$iHrgL$(34]' );
define( 'SECURE_AUTH_KEY',  '=%FYJyEL55`[yVkE.rDj-tMpJxy=OJC<Nx*s)D7*6D$m4rsCwD YC3cPaS0x%LG7' );
define( 'LOGGED_IN_KEY',    ':vvv.5+W60i8zW+IUr;+J}4g)2P*B*-0u>{bKk6B!ZoCS9:I$?MriBTRMLfeXQ|+' );
define( 'NONCE_KEY',        't`cRML?--]2K$;fKN1E64WX,FS=]%;`LX7%iyS{ZY<oGE>.806]{vOaFu)R>jSS0' );
define( 'AUTH_SALT',        'YlFh<N(=X)QY}a(>Ly9K-*$U[B|OEO6UW@sErFpRqh:*mq[t_6U7Up,VI$i(|[,5' );
define( 'SECURE_AUTH_SALT', 'DUs{RCtX`~hJP{XlmUeP|66&;`7-x+!.|}*Dl[bp3#ca1-By`ORJUlE>C8A8H~Y+' );
define( 'LOGGED_IN_SALT',   'H6NrN6RjqNyT)zK0 Y{(}JA#l27{66ZZ+YH=^_ZDsI^-T_]t2qA/phhv{}vijG&S' );
define( 'NONCE_SALT',       'o;6h)Q]AaatTAo:u`8<:d`r-a2gn;9ud}+QfgOs nPLp*]*Y65$t2z0?>6;cFZcA' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'avtwp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Adicione valores personalizados entre esta linha até "Isto é tudo". */



/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname(__FILE__) . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
