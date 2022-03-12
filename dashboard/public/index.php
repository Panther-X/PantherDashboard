<?php
$page = htmlentities(strip_tags($_GET['page']));
$info['AnimalName'] = trim(file_get_contents("/var/dashboard/statuses/animal_name"));
$info['PubKey'] = trim(file_get_contents("/var/dashboard/statuses/pubkey"));
$info['OnlineStatus'] = trim(file_get_contents("/var/dashboard/statuses/online_status"));
$info['CurrentBlockHeight'] = trim(file_get_contents("/var/dashboard/statuses/current_blockheight"));
$info['MinerBlockHeight'] = trim(file_get_contents("/var/dashboard/statuses/infoheight"));
$info['Version'] = trim(file_get_contents("/var/dashboard/version"));
$info['Update'] = trim(file_get_contents("/var/dashboard/update"));
$info['MinerVersion'] = trim(file_get_contents('/var/dashboard/statuses/current_miner_version'));
$info['LatestMinerVersion'] = trim(file_get_contents('/var/dashboard/statuses/latest_miner_version'));
$info['PantherXVer'] = trim(file_get_contents("/var/dashboard/statuses/pantherx_ver"));
$info['FirmwareVersion'] = trim(file_get_contents("/etc/ota_version"));

//Calculate some variables, so we can show a more detailled status than just "Syncing"
$CurrentBlockHeight = intval($info['CurrentBlockHeight']);
$MinerBlockHeight = intval($info['MinerBlockHeight']);
$BlockGap = $CurrentBlockHeight - $MinerBlockHeight;
$BlockGapPercentage = ($MinerBlockHeight / $CurrentBlockHeight) * 100;

if (file_exists('/opt/panther-x2/data/SN')) {
    $info['PantherXSN'] = trim(file_get_contents("/opt/panther-x2/data/SN"));
}
else
{
    $info['PantherXSN'] = 'Unknown';
}

if (empty($info['CurrentBlockHeight']))
{
        $sync = '<li><p style="color:#FE2D00">Helium API Error</p></li><br />';
}
elseif(($info['CurrentBlockHeight'] - $info['MinerBlockHeight']) <= 20)
{
        $sync = '<li><p style="color:#2BFF97">Fully Synced</p></li><br />';
}
else
{
        $sync = '<li><p style="color:yellow">Syncing '. number_format($BlockGapPercentage,2) . '%</br>We are ' . $BlockGap . ' blocks behind</p></li><br />';
}
?>
<!DOCTYPE html>
<html>
<head>
<meta name="format-detection" content="telephone=no" />
<link rel="stylesheet" href="css/reset.css" />
<link rel="stylesheet" href="css/common.css" />
<link rel="stylesheet" href="css/fonts.css" />
<link rel="stylesheet" href="css/hack.css" />
<script src="js/jquery-2.1.4.min.js"></script>
<script src="js/functions.js"></script>

<title>Panther <?php echo $info['PantherXVer']; ?> Miner Dashboard</title>
</head>

<body>
	<header>
		<div id="logo_container">
			<a href="/index.php" title="Home"><img src="images/logo-<?php echo strtolower($info['PantherXVer']); ?>.png" /></A>
		</div>

		<div id="power_container">
			<a href="#" title="Reboot miner" onclick="RebootDevice();"><span class="icon-switch"></span></a>
		</div>

		<br class="clear" />
	</header>

	<div id="main">
		<nav>
			<ul>
				<li <?php if($page == 'home' || $page == '') { echo 'class="active_page"'; } ?>><a href="/index.php" title="Homepage"><span class="icon-home"></span><span class="text">Home</span></a></li>
				<li <?php if($page == 'tools') { echo 'class="active_page"'; } ?>><a href="/?page=tools" title="Tools"><span class="icon-wrench"></span><span class="text">Tools</span></a></li>
				<li <?php if($page == 'info') { echo 'class="active_page"'; } ?>><a href="/?page=info" title="Information"><span class="icon-info"></span><span class="text">Info</span></a></li>
				<li <?php if($page == 'logs') { echo 'class="active_page"'; } ?>><a href="/?page=logs" title="Logs"><span class="icon-list"></span><span class="text">Logs</span></a></li>
			</ul>

		</nav>

		<section id="content">
			<?php
			switch($page)
			{
				case 'home':
					include('/var/dashboard/pages/home.php');
					break;

				case 'tools':
					include('/var/dashboard/pages/tools.php');
					break;

				case 'info':
					include('/var/dashboard/pages/info.php');
					break;

				case 'logs':
					include('/var/dashboard/pages/logs.php');
					break;

				case '404':
					include('/var/dashboard/pages/404.php');
					break;

				case 'rebooting':
					include('/var/dashboard/pages/rebooting.php');
					break;
				case 'updateminer':
					include('/var/dashboard/pages/updateminer.php');
					break;

				case 'updatedashboard':
					include('/var/dashboard/pages/updatedashboard.php');
					break;

				case 'clearblockchain':
					include('/var/dashboard/pages/clearblockchain.php');
					break;

				default:
					include('/var/dashboard/pages/home.php');
					break;
			}
			?>
		</section>

		<section id="status_panel">
			<div id="info_height_panel">
				<span class="icon-grid"></span>
				<h3>BlockChain Info</h3>
				<ul id="info_height_data">
					<?php echo $sync ?>
					<li>Miner Height: <span id="miner_height">Loading</span></li>
					<li>Live Height: <span id="live_height">Loading</span></li>
					<li>Sync Gap: <span id="sync_gap">Loading</span></li>
					<li>Online Status: <span id="online_status">Loading</span></li>
				</ul>
			</div>

			<div id="public_key_panel">
				<span class="icon-key"></span>
				<h3>Public Key</h3>
				<div id="public_key_data"><?php echo '<a href="https://explorer.helium.com/hotspots/'.$info['PubKey'].'">'.ucwords($info['AnimalName']).'</a>'; ?></div>
			</div>
		</section>

		<footer>
			<a href="https://github.com/Panther-X/PantherDashboard">Dashboard</a> Version: <?php echo $info['Version'];
			if($info['Version'] != $info['Update'])
			{
				echo ' - <a href="/index.php?page=updatedashboard" title="Update Releases">Update Available - '.$info['Update'].'</a>';
			}
			?>
			<br />Miner Version: <?php echo $info['MinerVersion'];
			if($info['MinerVersion'] != $info['LatestMinerVersion'])
			{
				echo ' - <a href="/index.php?page=updateminer">Update Available</a>';
			}
			?>
			<br />Panther X Firmware Version: <?php echo $info['FirmwareVersion'];
			?>
			<br />Panther X SN: <?php echo $info['PantherXSN'];
			?>
		</footer>
		<br class="clear" />
	</div>
</body>
</html>
