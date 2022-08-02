//var getBaseUrl()+"/" = "http://osvt.net:3000/";

//睡眠一段时间的函数
function sleep(startMs,sleepDurationMs){
    while(((new Date()).getTime()-startMs)<=sleepDurationMs) {}
}



function niceAlert(text,isSuccess){
    $.alert({
        animation: 'none',
        title: false,
        type: isSuccess?'green':'red',
        content: text,
        buttons: {
            okay: {
                keys: [
                    'enter'
                ],
                text: '确定'
            }
        }
    });
}


function trim(str) { //删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

//添加插入方法
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

//contains函数
Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

//从url中获取参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
}

//从url中获取getBaseUrl()+"/"
function getBaseUrl() {
    var reg = new RegExp("//(.+?)/");
    var r = document.URL.match(reg);
    if (r != null) {
        return "https://"+unescape(r[1]);
    }
    return null;
}

var policy_array = {
    compute: ["create",
        "create:attach_network",
        "create:attach_volume",
        "create:forced_host",
        "confirm:resize",
        "delete",
        "get_all",
        "get_all_tenants",
        "start",
        "stop",
        "unlock_override",
        "shelve",
        "shelve_offload",
        "unshelve",
        "resize",
        "revert_resize",
        "rebuild",
        "reboot",
        "volume_snapshot_create",
        "volume_snapshot_delete",
    ],
    cells_scheduler_filter: ["TargetCellFilter"],
    compute_extension: [
        "accounts",
        "admin_actions",
        "admin_actions:pause",
        "admin_actions:unpause",
        "admin_actions:suspend",
        "admin_actions:resume",
        "admin_actions:lock",
        "admin_actions:unlock",
        "admin_actions:resetNetwork",
        "admin_actions:injectNetworkInfo",
        "admin_actions:createBackup",
        "admin_actions:migrateLive",
        "admin_actions:resetState",
        "admin_actions:migrate",
        "aggregates",
        "agents",
        "attach_interfaces",
        "baremetal_nodes",
        "cells",
        "cells:create",
        "cells:delete",
        "cells:update",
        "cells:sync_instances",
        "certificates",
        "cloudpipe",
        "cloudpipe_update",
        "console_output",
        "consoles",
        "createserverext",
        "deferred_delete",
        "disk_config",
        "evacuate",
        "extended_server_attributes",
        "extended_status",
        "extended_availability_zone",
        "extended_ips",
        "extended_ips_mac",
        "extended_vif_net",
        "extended_volumes",
        "fixed_ips",
        "flavor_access",
        "flavor_access:addTenantAccess",
        "flavor_access:removeTenantAccess",
        "flavor_disabled",
        "flavor_rxtx",
        "flavor_swap",
        "flavorextradata",
        "flavorextraspecs:index",
        "flavorextraspecs:show",
        "flavorextraspecs:create",
        "flavorextraspecs:update",
        "flavorextraspecs:delete",
        "flavormanage",
        "floating_ip_dns",
        "floating_ip_pools",
        "floating_ips",
        "floating_ips_bulk",
        "fping",
        "fping:all_tenants",
        "hide_server_addresses",
        "hosts",
        "hypervisors",
        "image_size",
        "instance_actions",
        "instance_actions:events",
        "instance_usage_audit_log",
        "keypairs",
        "keypairs:index",
        "keypairs:show",
        "keypairs:create",
        "keypairs:delete",
        "multinic",
        "networks",
        "networks:view",
        "networks_associate",
        "quotas:show",
        "quotas:update",
        "quotas:delete",
        "quota_classes",
        "rescue",
        "security_group_default_rules",
        "security_groups",
        "server_diagnostics",
        "server_groups",
        "server_password",
        "server_usage",
        "services",
        "shelve",
        "shelveOffload",
        "simple_tenant_usage:show",
        "simple_tenant_usage:list",
        "unshelve",
        "users",
        "virtual_interfaces",
        "virtual_storage_arrays",
        "volumes",
        "volume_attachments:index",
        "volume_attachments:show",
        "volume_attachments:create",
        "volume_attachments:update",
        "volume_attachments:delete",
        "volumetypes",
        "availability_zone:list",
        "availability_zone:detail",
        "used_limits_for_admin",
        "migrations:index",
        "os-assisted-volume-snapshots:create",
        "os-assisted-volume-snapshots:delete",
        "console_auth_tokens",
        "os-server-external-events:create"
    ],
    network: [
        "add_dns_entry",
        "add_fixed_ip_to_instance",
        "add_network_to_project",
        "allocate_floating_ip",
        "allocate_for_instance",
        "associate",
        "associate_floating_ip",
        "attach_external_network",
        "create",
        "create_private_dns_domain",
        "create_public_dns_domain",
        "deallocate_for_instance",
        "delete",
        "delete_dns_domain",
        "delete_dns_entry",
        "disassociate",
        "disassociate_floating_ip",
        "get",
        "get_all",
        "get_backdoor_port",
        "get_dns_domains",
        "get_dns_entries_by_address",
        "get_dns_entries_by_name",
        "get_fixed_ip",
        "get_fixed_ip_by_address",
        "get_floating_ip",
        "get_floating_ip_by_address",
        "get_floating_ip_pools",
        "get_floating_ips_by_fixed_address",
        "get_floating_ips_by_project",
        "get_instance_id_by_floating_address",
        "get_instance_nw_info",
        "get_instance_uuids_by_ip_filter",
        "get_vifs_by_instance",
        "migrate_instance_finish",
        "migrate_instance_start",
        "modify_dns_entry",
        "release_floating_ip",
        "remove_fixed_ip_from_instance",
        "setup_networks_on_host",
        "validate_networks",
    ],
    os_compute_api: [
        "extension_info:discoverable",
        "flavors:discoverable",
        "image-size",
        "image-size:discoverable",
        "images:discoverable",
        "ips:discoverable",
        "ips:index",
        "ips:show",
        "limits:discoverable",
        "os-access-ips",
        "os-access-ips:discoverable",
        "os-admin-actions",
        "os-admin-actions:discoverable",
        "os-admin-actions:inject_network_info",
        "os-admin-actions:reset_network",
        "os-admin-actions:reset_state",
        "os-admin-password",
        "os-admin-password:discoverable",
        "os-agents",
        "os-agents:discoverable",
        "os-aggregates:add_host",
        "os-aggregates:create",
        "os-aggregates:delete",
        "os-aggregates:discoverable",
        "os-aggregates:index",
        "os-aggregates:remove_host",
        "os-aggregates:set_metadata",
        "os-aggregates:show",
        "os-aggregates:update",
        "os-assisted-volume-snapshots:create",
        "os-assisted-volume-snapshots:delete",
        "os-assisted-volume-snapshots:discoverable",
        "os-attach-interfaces",
        "os-attach-interfaces:discoverable",
        "os-availability-zone:detail",
        "os-availability-zone:discoverable",
        "os-availability-zone:list",
        "os-baremetal-nodes",
        "os-baremetal-nodes:discoverable",
        "os-block-device-mapping-v1:discoverable",
        "os-cells",
        "os-cells:create",
        "os-cells:delete",
        "os-cells:discoverable",
        "os-cells:sync_instances",
        "os-cells:update",
        "os-certificates:create",
        "os-certificates:discoverable",
        "os-certificates:show",
        "os-cloudpipe",
        "os-cloudpipe:discoverable",
        "os-console-auth-tokens",
        "os-console-output",
        "os-console-output:discoverable",
        "os-consoles:create",
        "os-consoles:delete",
        "os-consoles:discoverable",
        "os-consoles:index",
        "os-consoles:show",
        "os-create-backup",
        "os-create-backup:discoverable",
        "os-deferred-delete",
        "os-deferred-delete:discoverable",
        "os-disk-config",
        "os-disk-config:discoverable",
        "os-evacuate",
        "os-evacuate:discoverable",
        "os-extended-availability-zone",
        "os-extended-availability-zone:discoverable",
        "os-extended-server-attributes",
        "os-extended-server-attributes:discoverable",
        "os-extended-status",
        "os-extended-status:discoverable",
        "os-extended-volumes",
        "os-extended-volumes:discoverable",
        "os-fixed-ips",
        "os-fixed-ips:discoverable",
        "os-flavor-access",
        "os-flavor-access:add_tenant_access",
        "os-flavor-access:discoverable",
        "os-flavor-access:remove_tenant_access",
        "os-flavor-extra-specs:create",
        "os-flavor-extra-specs:delete",
        "os-flavor-extra-specs:discoverable",
        "os-flavor-extra-specs:index",
        "os-flavor-extra-specs:show",
        "os-flavor-extra-specs:update",
        "os-flavor-manage",
        "os-flavor-manage:discoverable",
        "os-flavor-rxtx",
        "os-flavor-rxtx:discoverable",
        "os-floating-ip-dns",
        "os-floating-ip-dns:discoverable",
        "os-floating-ip-pools",
        "os-floating-ip-pools:discoverable",
        "os-floating-ips",
        "os-floating-ips-bulk",
        "os-floating-ips-bulk:discoverable",
        "os-floating-ips:discoverable",
        "os-fping",
        "os-fping:all_tenants",
        "os-fping:discoverable",
        "os-hide-server-addresses",
        "os-hide-server-addresses:discoverable",
        "os-hosts",
        "os-hosts:discoverable",
        "os-hypervisors",
        "os-hypervisors:discoverable",
        "os-instance-actions",
        "os-instance-actions:discoverable",
        "os-instance-actions:events",
        "os-instance-usage-audit-log",
        "os-instance-usage-audit-log:discoverable",
        "os-keypairs",
        "os-keypairs:create",
        "os-keypairs:delete",
        "os-keypairs:discoverable",
        "os-keypairs:index",
        "os-keypairs:show",
        "os-lock-server:discoverable",
        "os-lock-server:lock",
        "os-lock-server:unlock",
        "os-migrate-server:discoverable",
        "os-migrate-server:migrate",
        "os-migrate-server:migrate_live",
        "os-migrations:discoverable",
        "os-migrations:index",
        "os-multinic",
        "os-multinic:discoverable",
        "os-networks",
        "os-networks-associate",
        "os-networks-associate:discoverable",
        "os-networks:discoverable",
        "os-networks:view",
        "os-pause-server:discoverable",
        "os-pause-server:pause",
        "os-pause-server:unpause",
        "os-pci:detail",
        "os-pci:discoverable",
        "os-pci:index",
        "os-pci:pci_servers",
        "os-pci:show",
        "os-personality:discoverable",
        "os-preserve-ephemeral-rebuild:discoverable",
        "os-quota-class-sets",
        "os-quota-class-sets:discoverable",
        "os-quota-sets:delete",
        "os-quota-sets:detail",
        "os-quota-sets:discoverable",
        "os-quota-sets:show",
        "os-quota-sets:update",
        "os-remote-consoles",
        "os-remote-consoles:discoverable",
        "os-rescue",
        "os-rescue:discoverable",
        "os-scheduler-hints:discoverable",
        "os-security-group-default-rules",
        "os-security-group-default-rules:discoverable",
        "os-security-groups",
        "os-security-groups:discoverable",
        "os-server-diagnostics",
        "os-server-diagnostics:discoverable",
        "os-server-external-events:create",
        "os-server-groups",
        "os-server-groups:discoverable",
        "os-server-password",
        "os-server-password:discoverable",
        "os-server-usage",
        "os-server-usage:discoverable",
        "os-services",
        "os-services:discoverable",
        "os-shelve:shelve",
        "os-shelve:shelve:discoverable",
        "os-shelve:shelve_offload",
        "os-shelve:unshelve",
        "os-simple-tenant-usage:discoverable",
        "os-simple-tenant-usage:list",
        "os-simple-tenant-usage:show",
        "os-suspend-server:discoverable",
        "os-suspend-server:resume",
        "os-suspend-server:suspend",
        "os-tenant-networks",
        "os-tenant-networks:discoverable",
        "os-used-limits",
        "os-used-limits:discoverable",
        "os-user-data:discoverable",
        "os-virtual-interfaces",
        "os-virtual-interfaces:discoverable",
        "os-volumes",
        "os-volumes-attachments:create",
        "os-volumes-attachments:delete",
        "os-volumes-attachments:discoverable",
        "os-volumes-attachments:index",
        "os-volumes-attachments:show",
        "os-volumes-attachments:update",
        "os-volumes:discoverable",
        "server-metadata:create",
        "server-metadata:delete",
        "server-metadata:discoverable",
        "server-metadata:index",
        "server-metadata:show",
        "server-metadata:update",
        "server-metadata:update_all",
        "servers:discoverable",
        "servers:start",
        "servers:stop",
    ]
}