<template>
    <div>
        <h2 v-if="roleAssignment.length==0">
            Sorry not authorized yet, only admins
        </h2>
        <h2 v-else>
            You are THE admin
        </h2>

    </div>
</template>

<script>
export default {
    name:"AdminPage",
    meteor: {
        $subscribe: {
            'roleAssignment' : []
        },
        roleAssignment () {
            return Meteor.roleAssignment.find({'role._id':'admin'})
        }
    },
}
</script>